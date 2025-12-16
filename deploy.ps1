# CX/DX GitHub Deployment Script
# Simple version without special characters

Write-Host "=== CX/DX GitHub Deployment Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Git is installed: $gitVersion" -ForegroundColor Green
    } else {
        throw "Git not found"
    }
} catch {
    Write-Host "Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://git-scm.com/download/win"
    Write-Host "2. Run the installer with default settings"
    Write-Host "3. Restart PowerShell and run this script again"
    Write-Host ""
    Write-Host "Opening download page in browser..." -ForegroundColor Yellow
    Start-Process "https://git-scm.com/download/win"
    exit 1
}

Write-Host ""

# Check if already a git repository
if (Test-Path ".git") {
    Write-Host "Git repository already initialized" -ForegroundColor Green
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "Repository initialized" -ForegroundColor Green
}

Write-Host ""

# Configure Git user if not set
$userName = git config user.name 2>&1
$userEmail = git config user.email 2>&1

if ([string]::IsNullOrWhiteSpace($userName)) {
    Write-Host "Git user name not configured." -ForegroundColor Yellow
    $name = Read-Host "Enter your name for Git commits"
    git config --global user.name "$name"
    Write-Host "User name configured" -ForegroundColor Green
}

if ([string]::IsNullOrWhiteSpace($userEmail)) {
    Write-Host "Git user email not configured." -ForegroundColor Yellow
    $email = Read-Host "Enter your email for Git commits"
    git config --global user.email "$email"
    Write-Host "User email configured" -ForegroundColor Green
}

Write-Host ""

# Check/Add remote repository
$remoteUrl = "https://github.com/sinnarameiko/cx.git"
$existingRemote = git remote get-url origin 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    git remote add origin $remoteUrl
    Write-Host "Remote repository added: $remoteUrl" -ForegroundColor Green
} else {
    if ($existingRemote -ne $remoteUrl) {
        Write-Host "Updating remote repository URL..." -ForegroundColor Yellow
        git remote set-url origin $remoteUrl
        Write-Host "Remote repository updated: $remoteUrl" -ForegroundColor Green
    } else {
        Write-Host "Remote repository already configured: $remoteUrl" -ForegroundColor Green
    }
}

Write-Host ""

# Show current status
Write-Host "Current repository status:" -ForegroundColor Yellow
git status --short

Write-Host ""

# Stage all files
Write-Host "Staging all files..." -ForegroundColor Yellow
git add .
Write-Host "Files staged" -ForegroundColor Green

Write-Host ""

# Create commit
$commitMessage = "Deploy CX/DX self-diagnosis application - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
Write-Host "Creating commit..." -ForegroundColor Yellow
Write-Host "Commit message: $commitMessage"
git commit -m "$commitMessage"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Commit created successfully" -ForegroundColor Green
} else {
    Write-Host "Note: No changes to commit or commit failed" -ForegroundColor Yellow
}

Write-Host ""

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Repository: $remoteUrl"
Write-Host ""
Write-Host "You may be prompted for GitHub credentials:" -ForegroundColor Cyan
Write-Host "- Username: your GitHub username"
Write-Host "- Password: use a Personal Access Token (not your GitHub password)"
Write-Host "  Generate token at: https://github.com/settings/tokens"
Write-Host ""

# Try to push
git push -u origin main 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Push to main branch failed. Trying master branch..." -ForegroundColor Yellow
    git push -u origin master 2>&1
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== Deployment successful! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your application is now on GitHub:" -ForegroundColor Cyan
    Write-Host "https://github.com/sinnarameiko/cx"
    Write-Host ""
    Write-Host "To enable GitHub Pages (free hosting):" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/sinnarameiko/cx/settings/pages"
    Write-Host "2. Select branch (main/master) and root folder"
    Write-Host "3. Click Save"
    Write-Host "4. Your app will be available at: https://sinnarameiko.github.io/cx/"
} else {
    Write-Host ""
    Write-Host "Push failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "1. Authentication failed - use a Personal Access Token"
    Write-Host "2. No permission - make sure you have write access"
    Write-Host "3. Repository does not exist - create it at https://github.com/new"
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
