// 애플리케이션 상태
const appState = {
    currentQuestionIndex: 0,
    responses: [],
    selectedIndustry: 'manufacturing',
    currentScreen: 'welcome',
    previousResults: null
};

// DOM 요소
const screens = {
    welcome: document.getElementById('welcome-screen'),
    assessment: document.getElementById('assessment-screen'),
    result: document.getElementById('result-screen'),
    compare: document.getElementById('compare-screen')
};

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // 이전 결과 확인
    loadPreviousResults();

    // 이벤트 리스너 등록
    document.getElementById('start-btn').addEventListener('click', startAssessment);
    document.getElementById('history-btn').addEventListener('click', showPreviousResults);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-btn').addEventListener('click', showResults);
    document.getElementById('download-btn').addEventListener('click', downloadResults);
    document.getElementById('compare-btn').addEventListener('click', showComparison);
    document.getElementById('restart-btn').addEventListener('click', restartAssessment);
    document.getElementById('back-to-result-btn').addEventListener('click', backToResults);
    document.getElementById('tooltip-btn').addEventListener('click', toggleTooltip);

    // 라디오 버튼 변경 감지
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener('change', onRatingChange);
    });
}

function loadPreviousResults() {
    const saved = localStorage.getItem('cxdx_results');
    if (saved) {
        appState.previousResults = JSON.parse(saved);
        document.getElementById('history-btn').style.display = 'inline-block';
    }
}

function startAssessment() {
    appState.selectedIndustry = document.getElementById('industry-select').value;
    appState.currentQuestionIndex = 0;
    appState.responses = [];

    switchScreen('assessment');
    renderQuestion();
}

function showPreviousResults() {
    if (appState.previousResults) {
        displayResults(appState.previousResults);
        switchScreen('result');
    }
}

function renderQuestion() {
    const question = questions[appState.currentQuestionIndex];
    const progress = ((appState.currentQuestionIndex + 1) / questions.length) * 100;

    // 진행률 업데이트
    document.getElementById('progress-text').textContent =
        `${appState.currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('category-text').textContent =
        `${question.category.toUpperCase()} · ${question.areaName}`;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // 질문 내용 업데이트
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('tooltip-text').textContent = question.tooltip;
    document.getElementById('tooltip-text').classList.remove('active');

    // 이전 응답 복원
    const previousResponse = appState.responses[appState.currentQuestionIndex];
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.checked = previousResponse && radio.value == previousResponse.score;
    });

    // 버튼 상태 업데이트
    updateNavigationButtons();
}

function toggleTooltip() {
    const tooltip = document.getElementById('tooltip-text');
    tooltip.classList.toggle('active');
}

function onRatingChange(event) {
    const score = parseInt(event.target.value);
    const question = questions[appState.currentQuestionIndex];

    appState.responses[appState.currentQuestionIndex] = {
        questionId: question.id,
        category: question.category,
        area: question.area,
        score: score
    };

    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    // 이전 버튼
    prevBtn.disabled = appState.currentQuestionIndex === 0;

    // 다음/제출 버튼
    const currentResponse = appState.responses[appState.currentQuestionIndex];
    const isLastQuestion = appState.currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
        submitBtn.disabled = !currentResponse;
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = !currentResponse;
    }
}

function previousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (appState.currentQuestionIndex < questions.length - 1) {
        appState.currentQuestionIndex++;
        renderQuestion();
    }
}

function showResults() {
    const results = calculateResults();
    saveResults(results);
    displayResults(results);
    switchScreen('result');
}

function calculateResults() {
    const areaScores = {};
    const areaResponses = {};

    // 영역별 응답 그룹화
    appState.responses.forEach(response => {
        if (!areaResponses[response.area]) {
            areaResponses[response.area] = [];
        }
        areaResponses[response.area].push(response.score);
    });

    // 영역별 점수 계산 (100점 만점으로 환산)
    Object.keys(areaResponses).forEach(area => {
        const scores = areaResponses[area];
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        areaScores[area] = Math.round((average / 5) * 100);
    });

    // CX/DX 점수 계산
    const cxAreas = ['understanding', 'journey', 'omnichannel', 'feedback', 'culture'];
    const dxAreas = ['strategy', 'infrastructure', 'data', 'capability', 'innovation'];

    const cxScore = Math.round(
        cxAreas.reduce((sum, area) => sum + areaScores[area], 0) / cxAreas.length
    );

    const dxScore = Math.round(
        dxAreas.reduce((sum, area) => sum + areaScores[area], 0) / dxAreas.length
    );

    const overallScore = Math.round((cxScore + dxScore) / 2);

    return {
        timestamp: new Date().toISOString(),
        industry: appState.selectedIndustry,
        responses: appState.responses,
        areaScores: areaScores,
        cxScore: cxScore,
        dxScore: dxScore,
        overallScore: overallScore
    };
}

function saveResults(results) {
    localStorage.setItem('cxdx_results', JSON.stringify(results));
    appState.previousResults = results;
    document.getElementById('compare-btn').style.display = 'inline-block';
}

function displayResults(results) {
    // 날짜 표시
    const date = new Date(results.timestamp);
    document.getElementById('result-date').textContent =
        `진단일: ${date.toLocaleDateString('ko-KR')} ${date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}`;

    // 점수 표시
    document.getElementById('overall-score').textContent = results.overallScore;
    document.getElementById('cx-score').textContent = results.cxScore;
    document.getElementById('dx-score').textContent = results.dxScore;

    // 성숙도 배지
    displayMaturityBadge('overall-maturity', results.overallScore);
    displayMaturityBadge('cx-maturity', results.cxScore);
    displayMaturityBadge('dx-maturity', results.dxScore);

    // 레이더 차트
    renderRadarChart(results.areaScores);

    // 벤치마크 비교
    renderBenchmark(results);

    // 영역별 점수
    renderAreaScores(results.areaScores);

    // 우선순위 개선과제
    renderPriorityTasks(results.areaScores);

    // 개선 제안
    renderRecommendations(results.areaScores);
}

function displayMaturityBadge(elementId, score) {
    const element = document.getElementById(elementId);
    let level;

    if (score <= 40) level = maturityLevels.initial;
    else if (score <= 60) level = maturityLevels.developing;
    else if (score <= 80) level = maturityLevels.mature;
    else level = maturityLevels.leading;

    element.textContent = level.name;
    element.style.backgroundColor = level.color;
    element.style.color = 'white';
}

function getMaturityLevel(score) {
    if (score <= 40) return 'initial';
    else if (score <= 60) return 'developing';
    else if (score <= 80) return 'mature';
    else return 'leading';
}

function renderRadarChart(areaScores) {
    const ctx = document.getElementById('radar-chart');

    // 기존 차트 제거
    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }

    const labels = Object.keys(areaScores).map(area => areaNames[area]);
    const data = Object.values(areaScores);

    window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '현재 점수',
                data: data,
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        font: {
                            size: 12,
                            family: "'Noto Sans KR', sans-serif"
                        }
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                            weight: '600',
                            family: "'Noto Sans KR', sans-serif"
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        family: "'Noto Sans KR', sans-serif"
                    },
                    bodyFont: {
                        size: 13,
                        family: "'Noto Sans KR', sans-serif"
                    },
                    callbacks: {
                        label: function (context) {
                            return `점수: ${context.parsed.r}점`;
                        }
                    }
                }
            }
        }
    });
}

function renderBenchmark(results) {
    const benchmark = industryBenchmarks[results.industry];
    const container = document.getElementById('benchmark-content');

    let html = `<p style="margin-bottom: 1rem; color: var(--text-secondary);">
        <strong>${benchmark.name}</strong> 평균과 비교한 결과입니다.
    </p>`;

    html += '<div class="benchmark-comparison">';

    Object.keys(results.areaScores).forEach(area => {
        const myScore = results.areaScores[area];
        const benchmarkScore = benchmark.scores[area];
        const diff = myScore - benchmarkScore;
        const diffClass = diff >= 0 ? 'positive' : 'negative';
        const diffSymbol = diff >= 0 ? '+' : '';

        html += `
            <div class="benchmark-item">
                <h4>${areaNames[area]}</h4>
                <div class="benchmark-value">${myScore}점</div>
                <div class="benchmark-diff ${diffClass}">
                    업계 평균 ${benchmarkScore}점 (${diffSymbol}${diff}점)
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function renderAreaScores(areaScores) {
    const container = document.getElementById('area-scores-content');
    let html = '';

    Object.keys(areaScores).forEach(area => {
        const score = areaScores[area];
        const level = getMaturityLevel(score);
        const maturity = maturityLevels[level];

        html += `
            <div class="area-score-item">
                <div>
                    <h4>${areaNames[area]}</h4>
                    <div class="maturity-badge" style="background-color: ${maturity.color}; color: white; margin-top: 0.5rem;">
                        ${maturity.name} 단계
                    </div>
                </div>
                <div class="area-score-value">${score}점</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderPriorityTasks(areaScores) {
    const container = document.getElementById('priority-content');

    // 점수 낮은 순으로 정렬
    const sortedAreas = Object.entries(areaScores)
        .sort((a, b) => a[1] - b[1])
        .slice(0, 3);

    let html = '<p style="margin-bottom: 1rem; color: var(--text-secondary);">점수가 낮은 영역을 우선적으로 개선하세요.</p>';

    sortedAreas.forEach(([area, score], index) => {
        html += `
            <div class="priority-item">
                <h4>${index + 1}순위: ${areaNames[area]} (${score}점)</h4>
                <p style="margin-top: 0.5rem; color: var(--text-secondary);">
                    ${maturityLevels[getMaturityLevel(score)].description}
                </p>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderRecommendations(areaScores) {
    const container = document.getElementById('recommendations-content');
    let html = '';

    Object.keys(areaScores).forEach(area => {
        const score = areaScores[area];
        const level = getMaturityLevel(score);
        const recs = recommendations[area][level];

        html += `
            <div class="recommendation-item">
                <div class="recommendation-header" onclick="toggleRecommendation('${area}')">
                    <h4>${areaNames[area]} (${score}점)</h4>
                    <span id="rec-icon-${area}">▼</span>
                </div>
                <div class="recommendation-content" id="rec-content-${area}">
                    <ul>
                        ${recs.map(rec => `<li>${rec}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function toggleRecommendation(area) {
    const content = document.getElementById(`rec-content-${area}`);
    const icon = document.getElementById(`rec-icon-${area}`);

    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '▲' : '▼';
}

function downloadResults() {
    const resultContent = document.getElementById('result-content');
    const actionButtons = document.querySelector('.action-buttons');

    // 버튼 임시 숨김
    actionButtons.style.display = 'none';

    html2canvas(resultContent, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false
    }).then(canvas => {
        // 버튼 다시 표시
        actionButtons.style.display = 'flex';

        // 이미지 다운로드
        const link = document.createElement('a');
        const date = new Date().toISOString().split('T')[0];
        link.download = `CX-DX진단결과_${date}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function showComparison() {
    if (!appState.previousResults) return;

    const currentResults = calculateResults();
    renderComparison(appState.previousResults, currentResults);
    switchScreen('compare');
}

function renderComparison(oldResults, newResults) {
    const ctx = document.getElementById('comparison-chart');

    // 기존 차트 제거
    if (window.comparisonChartInstance) {
        window.comparisonChartInstance.destroy();
    }

    const labels = Object.keys(oldResults.areaScores).map(area => areaNames[area]);
    const oldData = Object.values(oldResults.areaScores);
    const newData = Object.values(newResults.areaScores);

    window.comparisonChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '이전 진단',
                    data: oldData,
                    backgroundColor: 'rgba(148, 163, 184, 0.2)',
                    borderColor: 'rgba(148, 163, 184, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(148, 163, 184, 1)',
                    pointRadius: 3
                },
                {
                    label: '현재 진단',
                    data: newData,
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        font: {
                            size: 12,
                            family: "'Noto Sans KR', sans-serif"
                        }
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                            weight: '600',
                            family: "'Noto Sans KR', sans-serif"
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 14,
                            family: "'Noto Sans KR', sans-serif"
                        }
                    }
                }
            }
        }
    });

    // 상세 비교 표
    renderComparisonDetails(oldResults, newResults);
}

function renderComparisonDetails(oldResults, newResults) {
    const container = document.getElementById('comparison-details');

    let html = `
        <div class="comparison-detail-item header">
            <div>영역</div>
            <div>이전</div>
            <div>현재</div>
            <div>변화</div>
        </div>
    `;

    Object.keys(oldResults.areaScores).forEach(area => {
        const oldScore = oldResults.areaScores[area];
        const newScore = newResults.areaScores[area];
        const change = newScore - oldScore;
        const changeClass = change > 0 ? 'improved' : (change < 0 ? 'declined' : '');
        const changeSymbol = change > 0 ? '+' : '';

        html += `
            <div class="comparison-detail-item">
                <div><strong>${areaNames[area]}</strong></div>
                <div>${oldScore}점</div>
                <div>${newScore}점</div>
                <div class="change-indicator ${changeClass}">
                    ${changeSymbol}${change}점
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function backToResults() {
    switchScreen('result');
}

function restartAssessment() {
    appState.currentQuestionIndex = 0;
    appState.responses = [];
    switchScreen('welcome');
}

function switchScreen(screenName) {
    Object.keys(screens).forEach(key => {
        screens[key].classList.remove('active');
    });
    screens[screenName].classList.add('active');
    appState.currentScreen = screenName;

    // 스크롤 맨 위로
    window.scrollTo(0, 0);
}
