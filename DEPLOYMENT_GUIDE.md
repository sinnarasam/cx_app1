# GitHub 배포 가이드

CX/DX 자가진단 애플리케이션을 GitHub에 배포하는 방법입니다.

## 🚀 빠른 배포 (자동화 스크립트 사용)

### 1단계: Git 설치 확인

PowerShell을 열고 다음 명령어를 실행하세요:

```powershell
git --version
```

**Git이 설치되어 있지 않다면:**
1. https://git-scm.com/download/win 에서 다운로드
2. 설치 프로그램 실행 (기본 설정으로 진행)
3. PowerShell 재시작

### 2단계: 배포 스크립트 실행

프로젝트 폴더에서 PowerShell을 열고 다음 명령어를 실행하세요:

```powershell
.\deploy.ps1
```

스크립트가 자동으로:
- Git 설치 확인
- 저장소 초기화
- 사용자 정보 설정 (필요시)
- 원격 저장소 연결
- 파일 커밋
- GitHub에 푸시

### 3단계: GitHub 인증

GitHub 인증이 필요할 수 있습니다:

**Personal Access Token 사용 (권장):**
1. https://github.com/settings/tokens 접속
2. "Generate new token (classic)" 클릭
3. 권한 선택: `repo` 전체 선택
4. 토큰 생성 및 복사
5. 배포 스크립트에서 비밀번호 입력 시 토큰 붙여넣기

## 📋 수동 배포 (단계별)

자동화 스크립트를 사용하지 않으려면 다음 명령어를 순서대로 실행하세요:

```powershell
# 1. Git 저장소 초기화 (처음만)
git init

# 2. Git 사용자 정보 설정 (처음만)
git config --global user.name "당신의 이름"
git config --global user.email "your.email@example.com"

# 3. 원격 저장소 추가 (처음만)
git remote add origin https://github.com/sinnarameiko/cx.git

# 4. 모든 파일 스테이징
git add .

# 5. 커밋 생성
git commit -m "Deploy CX/DX self-diagnosis application"

# 6. GitHub에 푸시
git push -u origin main
```

만약 `main` 브랜치가 작동하지 않으면 `master`를 시도하세요:
```powershell
git push -u origin master
```

## 🌐 GitHub Pages로 웹 호스팅하기

배포 후 무료로 웹사이트를 호스팅할 수 있습니다:

1. https://github.com/sinnarameiko/cx/settings/pages 접속
2. Source 섹션에서:
   - Branch: `main` (또는 `master`) 선택
   - Folder: `/ (root)` 선택
3. "Save" 클릭
4. 몇 분 후 다음 주소에서 접속 가능:
   - https://sinnarameiko.github.io/cx/

## ❗ 문제 해결

### "Git을 찾을 수 없습니다" 오류
- Git이 설치되어 있는지 확인
- PowerShell을 재시작
- 시스템 PATH에 Git이 추가되어 있는지 확인

### 인증 실패
- Personal Access Token을 사용하세요 (GitHub 비밀번호는 더 이상 지원되지 않음)
- 토큰 생성: https://github.com/settings/tokens

### 푸시 권한 없음
- 저장소에 대한 쓰기 권한이 있는지 확인
- 저장소가 존재하는지 확인: https://github.com/sinnarameiko/cx

### 저장소가 존재하지 않음
- GitHub에서 새 저장소 생성: https://github.com/new
- 저장소 이름: `cx`
- Public 또는 Private 선택
- README 추가하지 않음 (이미 있음)

## 📁 배포되는 파일

다음 파일들이 GitHub에 업로드됩니다:

- `index.html` - 메인 애플리케이션 페이지
- `app.js` - 애플리케이션 로직
- `data.js` - 진단 질문 및 데이터
- `styles.css` - 스타일시트
- `pdf-download.js` - PDF 다운로드 기능
- `README.md` - 프로젝트 문서
- `deploy.ps1` - 배포 스크립트
- `DEPLOYMENT_GUIDE.md` - 이 가이드

## 🔄 업데이트 배포하기

코드를 수정한 후 다시 배포하려면:

```powershell
# 자동화 스크립트 사용
.\deploy.ps1

# 또는 수동으로
git add .
git commit -m "업데이트 설명"
git push
```

## 💡 추가 팁

- **브랜치 확인**: `git branch` 명령어로 현재 브랜치 확인
- **상태 확인**: `git status` 명령어로 변경사항 확인
- **히스토리 확인**: `git log` 명령어로 커밋 히스토리 확인
- **변경사항 취소**: `git reset --hard HEAD` (주의: 모든 변경사항 삭제됨)

## 📞 도움이 필요하신가요?

- Git 공식 문서: https://git-scm.com/doc
- GitHub 가이드: https://guides.github.com/
- GitHub Pages 문서: https://docs.github.com/pages
