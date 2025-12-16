// CX/DX 진단 질문 데이터
const questions = [
    // CX - 고객 이해 (6문항)
    {
        id: 'cx-understanding-1',
        category: 'cx',
        area: 'understanding',
        areaName: '고객 이해',
        question: '우리 회사는 고객 데이터를 체계적으로 수집하고 분석합니다',
        tooltip: '고객 행동, 선호도, 피드백 등을 정기적으로 수집하고 인사이트를 도출하는지 평가합니다'
    },
    {
        id: 'cx-understanding-2',
        category: 'cx',
        area: 'understanding',
        areaName: '고객 이해',
        question: '고객 세그먼트별 니즈와 페인포인트를 명확히 파악하고 있습니다',
        tooltip: '고객을 세분화하고 각 그룹의 특성과 요구사항을 구체적으로 이해하고 있는지 확인합니다'
    },
    {
        id: 'cx-understanding-3',
        category: 'cx',
        area: 'understanding',
        areaName: '고객 이해',
        question: '고객의 소리(VoC)를 수집하고 활용하는 체계가 있습니다',
        tooltip: '고객 피드백을 다양한 채널에서 수집하고 이를 서비스 개선에 반영하는 프로세스가 있는지 평가합니다'
    },
    {
        id: 'cx-understanding-4',
        category: 'cx',
        area: 'understanding',
        areaName: '고객 이해',
        question: '고객 만족도와 충성도를 정기적으로 측정하고 모니터링합니다',
        tooltip: 'NPS, CSAT 등의 지표를 통해 고객 만족도를 지속적으로 추적하고 있는지 확인합니다'
    },
    {
        id: 'cx-understanding-5',
        category: 'cx',
        area: 'understanding',
        areaName: '고객 이해',
        question: '고객 인사이트를 전사적으로 공유하고 활용합니다',
        tooltip: '고객에 대한 이해가 조직 전체에 공유되고 의사결정에 반영되는지 평가합니다'
    },
    {
        id: 'cx-understanding-6',
        category: 'cx',
        area: 'understanding',
        areaName: '고객 이해',
        question: '고객 행동 예측을 위한 데이터 분석 역량을 보유하고 있습니다',
        tooltip: '과거 데이터를 기반으로 고객의 미래 행동을 예측하고 선제적으로 대응할 수 있는지 확인합니다'
    },

    // CX - 여정 설계 (6문항)
    {
        id: 'cx-journey-1',
        category: 'cx',
        area: 'journey',
        areaName: '여정 설계',
        question: '고객 여정 맵(Customer Journey Map)을 작성하고 관리합니다',
        tooltip: '고객이 우리 서비스를 경험하는 전 과정을 시각화하고 관리하고 있는지 평가합니다'
    },
    {
        id: 'cx-journey-2',
        category: 'cx',
        area: 'journey',
        areaName: '여정 설계',
        question: '고객 여정의 각 접점(Touchpoint)을 파악하고 최적화합니다',
        tooltip: '고객과의 모든 접점을 식별하고 각 단계에서 최상의 경험을 제공하기 위해 노력하는지 확인합니다'
    },
    {
        id: 'cx-journey-3',
        category: 'cx',
        area: 'journey',
        areaName: '여정 설계',
        question: '고객 여정상의 마찰 요소(Friction)를 지속적으로 개선합니다',
        tooltip: '고객이 불편을 느끼는 지점을 찾아내고 제거하기 위한 노력을 하고 있는지 평가합니다'
    },
    {
        id: 'cx-journey-4',
        category: 'cx',
        area: 'journey',
        areaName: '여정 설계',
        question: '고객 여정을 설계할 때 감정적 경험을 고려합니다',
        tooltip: '기능적 측면뿐만 아니라 고객의 감정과 느낌까지 고려하여 여정을 설계하는지 확인합니다'
    },
    {
        id: 'cx-journey-5',
        category: 'cx',
        area: 'journey',
        areaName: '여정 설계',
        question: '고객 여정 개선을 위한 크로스펑셔널 협업이 이루어집니다',
        tooltip: '여정 개선을 위해 마케팅, 영업, CS 등 관련 부서가 협력하고 있는지 평가합니다'
    },
    {
        id: 'cx-journey-6',
        category: 'cx',
        area: 'journey',
        areaName: '여정 설계',
        question: '고객 여정의 성과를 측정하고 지속적으로 개선합니다',
        tooltip: '여정 각 단계의 전환율, 이탈률 등을 측정하고 개선 활동을 하고 있는지 확인합니다'
    },

    // CX - 옴니채널 경험 (6문항)
    {
        id: 'cx-omnichannel-1',
        category: 'cx',
        area: 'omnichannel',
        areaName: '옴니채널 경험',
        question: '온라인과 오프라인 채널이 통합되어 일관된 경험을 제공합니다',
        tooltip: '고객이 어떤 채널을 이용하든 동일한 수준의 서비스를 받을 수 있는지 평가합니다'
    },
    {
        id: 'cx-omnichannel-2',
        category: 'cx',
        area: 'omnichannel',
        areaName: '옴니채널 경험',
        question: '채널 간 고객 데이터가 연동되어 끊김없는 경험을 제공합니다',
        tooltip: '고객이 채널을 이동할 때 정보가 유지되고 연속적인 경험을 제공하는지 확인합니다'
    },
    {
        id: 'cx-omnichannel-3',
        category: 'cx',
        area: 'omnichannel',
        areaName: '옴니채널 경험',
        question: '모바일 경험이 최적화되어 있습니다',
        tooltip: '모바일 환경에서도 편리하고 효과적인 서비스 이용이 가능한지 평가합니다'
    },
    {
        id: 'cx-omnichannel-4',
        category: 'cx',
        area: 'omnichannel',
        areaName: '옴니채널 경험',
        question: '고객이 선호하는 채널을 통해 소통할 수 있습니다',
        tooltip: '다양한 커뮤니케이션 채널을 제공하고 고객이 선택할 수 있는지 확인합니다'
    },
    {
        id: 'cx-omnichannel-5',
        category: 'cx',
        area: 'omnichannel',
        areaName: '옴니채널 경험',
        question: '채널별 고객 경험의 품질을 모니터링하고 관리합니다',
        tooltip: '각 채널에서 제공되는 서비스 품질을 측정하고 개선하고 있는지 평가합니다'
    },
    {
        id: 'cx-omnichannel-6',
        category: 'cx',
        area: 'omnichannel',
        areaName: '옴니채널 경험',
        question: '새로운 채널과 기술을 적극적으로 도입하고 실험합니다',
        tooltip: '챗봇, 메타버스 등 새로운 고객 접점을 탐색하고 활용하고 있는지 확인합니다'
    },

    // CX - 피드백 시스템 (6문항)
    {
        id: 'cx-feedback-1',
        category: 'cx',
        area: 'feedback',
        areaName: '피드백 시스템',
        question: '고객 피드백을 실시간으로 수집하고 대응합니다',
        tooltip: '고객의 의견과 불만을 즉시 파악하고 신속하게 대응하는 체계가 있는지 평가합니다'
    },
    {
        id: 'cx-feedback-2',
        category: 'cx',
        area: 'feedback',
        areaName: '피드백 시스템',
        question: '고객 불만 처리 프로세스가 체계적으로 운영됩니다',
        tooltip: '고객 불만을 접수하고 해결하는 명확한 절차와 책임이 있는지 확인합니다'
    },
    {
        id: 'cx-feedback-3',
        category: 'cx',
        area: 'feedback',
        areaName: '피드백 시스템',
        question: '고객 피드백을 제품/서비스 개선에 반영하는 체계가 있습니다',
        tooltip: '고객 의견이 실제 개선 활동으로 이어지는 프로세스가 있는지 평가합니다'
    },
    {
        id: 'cx-feedback-4',
        category: 'cx',
        area: 'feedback',
        areaName: '피드백 시스템',
        question: '고객에게 피드백 반영 결과를 공유합니다',
        tooltip: '고객 의견이 어떻게 반영되었는지 고객에게 알리고 있는지 확인합니다'
    },
    {
        id: 'cx-feedback-5',
        category: 'cx',
        area: 'feedback',
        areaName: '피드백 시스템',
        question: '다양한 채널을 통해 고객 피드백을 수집합니다',
        tooltip: '설문, 인터뷰, SNS, 리뷰 등 여러 경로로 고객 의견을 듣고 있는지 평가합니다'
    },
    {
        id: 'cx-feedback-6',
        category: 'cx',
        area: 'feedback',
        areaName: '피드백 시스템',
        question: '피드백 데이터를 분석하여 인사이트를 도출합니다',
        tooltip: '단순 수집을 넘어 패턴을 분석하고 의미있는 통찰을 얻고 있는지 확인합니다'
    },

    // CX - 조직문화 (6문항)
    {
        id: 'cx-culture-1',
        category: 'cx',
        area: 'culture',
        areaName: '조직문화',
        question: '고객 중심 사고가 조직 문화로 자리잡고 있습니다',
        tooltip: '모든 의사결정에서 고객 관점을 우선적으로 고려하는 문화가 있는지 평가합니다'
    },
    {
        id: 'cx-culture-2',
        category: 'cx',
        area: 'culture',
        areaName: '조직문화',
        question: '경영진이 고객 경험 개선을 적극적으로 지원합니다',
        tooltip: '리더십이 CX의 중요성을 인식하고 자원과 권한을 부여하는지 확인합니다'
    },
    {
        id: 'cx-culture-3',
        category: 'cx',
        area: 'culture',
        areaName: '조직문화',
        question: 'CX 전담 조직이나 책임자가 있습니다',
        tooltip: '고객 경험 관리를 전담하는 조직이나 역할이 명확히 정의되어 있는지 평가합니다'
    },
    {
        id: 'cx-culture-4',
        category: 'cx',
        area: 'culture',
        areaName: '조직문화',
        question: '임직원 대상 CX 교육과 훈련이 정기적으로 이루어집니다',
        tooltip: '조직 구성원의 CX 역량 향상을 위한 교육 프로그램이 있는지 확인합니다'
    },
    {
        id: 'cx-culture-5',
        category: 'cx',
        area: 'culture',
        areaName: '조직문화',
        question: 'CX 성과가 평가와 보상에 반영됩니다',
        tooltip: '고객 경험 개선 노력과 성과를 인정하고 보상하는 체계가 있는지 평가합니다'
    },
    {
        id: 'cx-culture-6',
        category: 'cx',
        area: 'culture',
        areaName: '조직문화',
        question: '부서 간 협업을 통해 통합적인 고객 경험을 제공합니다',
        tooltip: '사일로를 넘어 부서 간 협력으로 일관된 고객 경험을 만들고 있는지 확인합니다'
    },

    // DX - 디지털 전략 (6문항)
    {
        id: 'dx-strategy-1',
        category: 'dx',
        area: 'strategy',
        areaName: '디지털 전략',
        question: '명확한 디지털 전환 비전과 전략이 수립되어 있습니다',
        tooltip: '조직의 디지털 전환 방향과 목표가 명확하게 정의되어 있는지 평가합니다'
    },
    {
        id: 'dx-strategy-2',
        category: 'dx',
        area: 'strategy',
        areaName: '디지털 전략',
        question: '디지털 전략이 비즈니스 전략과 연계되어 있습니다',
        tooltip: '디지털 전환이 사업 목표 달성을 위한 핵심 수단으로 인식되고 있는지 확인합니다'
    },
    {
        id: 'dx-strategy-3',
        category: 'dx',
        area: 'strategy',
        areaName: '디지털 전략',
        question: '디지털 전환을 위한 로드맵과 실행 계획이 있습니다',
        tooltip: '단계별 추진 계획과 마일스톤이 구체적으로 수립되어 있는지 평가합니다'
    },
    {
        id: 'dx-strategy-4',
        category: 'dx',
        area: 'strategy',
        areaName: '디지털 전략',
        question: '디지털 전환에 필요한 예산과 자원이 확보되어 있습니다',
        tooltip: '전략 실행을 위한 충분한 투자와 자원 배분이 이루어지고 있는지 확인합니다'
    },
    {
        id: 'dx-strategy-5',
        category: 'dx',
        area: 'strategy',
        areaName: '디지털 전략',
        question: '디지털 전환 성과를 측정하고 모니터링합니다',
        tooltip: 'KPI를 통해 디지털 전환의 진행 상황과 성과를 추적하고 있는지 평가합니다'
    },
    {
        id: 'dx-strategy-6',
        category: 'dx',
        area: 'strategy',
        areaName: '디지털 전략',
        question: '디지털 트렌드를 지속적으로 모니터링하고 전략에 반영합니다',
        tooltip: '최신 기술과 시장 동향을 파악하고 전략을 업데이트하고 있는지 확인합니다'
    },

    // DX - 기술 인프라 (6문항)
    {
        id: 'dx-infrastructure-1',
        category: 'dx',
        area: 'infrastructure',
        areaName: '기술 인프라',
        question: '클라우드 기반 IT 인프라를 구축하고 활용합니다',
        tooltip: '확장성과 유연성을 위해 클라우드 환경을 도입하고 있는지 평가합니다'
    },
    {
        id: 'dx-infrastructure-2',
        category: 'dx',
        area: 'infrastructure',
        areaName: '기술 인프라',
        question: 'IT 시스템이 안정적으로 운영되고 있습니다',
        tooltip: '시스템 가용성, 보안, 성능이 적절히 관리되고 있는지 확인합니다'
    },
    {
        id: 'dx-infrastructure-3',
        category: 'dx',
        area: 'infrastructure',
        areaName: '기술 인프라',
        question: '레거시 시스템 현대화를 추진하고 있습니다',
        tooltip: '오래된 시스템을 개선하거나 대체하기 위한 노력을 하고 있는지 평가합니다'
    },
    {
        id: 'dx-infrastructure-4',
        category: 'dx',
        area: 'infrastructure',
        areaName: '기술 인프라',
        question: 'API를 통한 시스템 간 연계가 원활합니다',
        tooltip: '다양한 시스템과 서비스가 효과적으로 통합되어 있는지 확인합니다'
    },
    {
        id: 'dx-infrastructure-5',
        category: 'dx',
        area: 'infrastructure',
        areaName: '기술 인프라',
        question: '사이버 보안 체계가 잘 갖추어져 있습니다',
        tooltip: '데이터와 시스템을 보호하기 위한 보안 정책과 기술이 있는지 평가합니다'
    },
    {
        id: 'dx-infrastructure-6',
        category: 'dx',
        area: 'infrastructure',
        areaName: '기술 인프라',
        question: 'IT 인프라가 비즈니스 요구사항에 신속하게 대응할 수 있습니다',
        tooltip: '새로운 서비스나 기능을 빠르게 구현할 수 있는 민첩성이 있는지 확인합니다'
    },

    // DX - 데이터 활용 (6문항)
    {
        id: 'dx-data-1',
        category: 'dx',
        area: 'data',
        areaName: '데이터 활용',
        question: '데이터 기반 의사결정 문화가 정착되어 있습니다',
        tooltip: '직관이나 경험보다 데이터를 기반으로 판단하는 문화가 있는지 평가합니다'
    },
    {
        id: 'dx-data-2',
        category: 'dx',
        area: 'data',
        areaName: '데이터 활용',
        question: '데이터 수집, 저장, 관리 체계가 구축되어 있습니다',
        tooltip: '데이터를 체계적으로 관리하는 시스템과 프로세스가 있는지 확인합니다'
    },
    {
        id: 'dx-data-3',
        category: 'dx',
        area: 'data',
        areaName: '데이터 활용',
        question: '데이터 분석 도구와 플랫폼을 활용하고 있습니다',
        tooltip: 'BI, 분석 툴 등을 통해 데이터를 효과적으로 분석하고 있는지 평가합니다'
    },
    {
        id: 'dx-data-4',
        category: 'dx',
        area: 'data',
        areaName: '데이터 활용',
        question: '데이터 품질 관리가 이루어지고 있습니다',
        tooltip: '정확하고 신뢰할 수 있는 데이터를 유지하기 위한 노력을 하고 있는지 확인합니다'
    },
    {
        id: 'dx-data-5',
        category: 'dx',
        area: 'data',
        areaName: '데이터 활용',
        question: 'AI/머신러닝을 활용한 데이터 분석을 수행합니다',
        tooltip: '고급 분석 기법을 통해 예측과 최적화를 하고 있는지 평가합니다'
    },
    {
        id: 'dx-data-6',
        category: 'dx',
        area: 'data',
        areaName: '데이터 활용',
        question: '데이터 거버넌스와 보안 정책이 수립되어 있습니다',
        tooltip: '데이터 관리 원칙과 개인정보 보호 체계가 있는지 확인합니다'
    },

    // DX - 조직 역량 (6문항)
    {
        id: 'dx-capability-1',
        category: 'dx',
        area: 'capability',
        areaName: '조직 역량',
        question: '디지털 인재 확보와 육성에 투자하고 있습니다',
        tooltip: '디지털 역량을 갖춘 인재를 채용하고 기존 인력을 교육하고 있는지 평가합니다'
    },
    {
        id: 'dx-capability-2',
        category: 'dx',
        area: 'capability',
        areaName: '조직 역량',
        question: '임직원의 디지털 리터러시 수준이 높습니다',
        tooltip: '조직 구성원들이 디지털 도구와 기술을 능숙하게 사용하는지 확인합니다'
    },
    {
        id: 'dx-capability-3',
        category: 'dx',
        area: 'capability',
        areaName: '조직 역량',
        question: '디지털 전환을 위한 교육 프로그램이 운영됩니다',
        tooltip: '체계적인 디지털 교육과 훈련 기회를 제공하고 있는지 평가합니다'
    },
    {
        id: 'dx-capability-4',
        category: 'dx',
        area: 'capability',
        areaName: '조직 역량',
        question: '애자일, 린 등 새로운 업무 방식을 도입하고 있습니다',
        tooltip: '빠른 실험과 학습을 위한 유연한 업무 방식을 채택하고 있는지 확인합니다'
    },
    {
        id: 'dx-capability-5',
        category: 'dx',
        area: 'capability',
        areaName: '조직 역량',
        question: '디지털 프로젝트 수행 경험과 노하우가 축적되고 있습니다',
        tooltip: '디지털 프로젝트를 성공적으로 수행하고 학습하고 있는지 평가합니다'
    },
    {
        id: 'dx-capability-6',
        category: 'dx',
        area: 'capability',
        areaName: '조직 역량',
        question: '외부 전문가나 파트너와 협력하여 역량을 보완합니다',
        tooltip: '부족한 역량을 외부 자원을 통해 보완하고 있는지 확인합니다'
    },

    // DX - 혁신 문화 (6문항)
    {
        id: 'dx-innovation-1',
        category: 'dx',
        area: 'innovation',
        areaName: '혁신 문화',
        question: '실패를 용인하고 학습하는 문화가 있습니다',
        tooltip: '새로운 시도에서 실패하더라도 이를 학습 기회로 삼는 문화가 있는지 평가합니다'
    },
    {
        id: 'dx-innovation-2',
        category: 'dx',
        area: 'innovation',
        areaName: '혁신 문화',
        question: '임직원의 혁신 아이디어를 장려하고 지원합니다',
        tooltip: '조직 구성원의 창의적 아이디어를 수렴하고 실행을 지원하는지 확인합니다'
    },
    {
        id: 'dx-innovation-3',
        category: 'dx',
        area: 'innovation',
        areaName: '혁신 문화',
        question: '신기술과 혁신적 솔루션을 적극적으로 실험합니다',
        tooltip: 'PoC, 파일럿 등을 통해 새로운 기술을 시험하고 있는지 평가합니다'
    },
    {
        id: 'dx-innovation-4',
        category: 'dx',
        area: 'innovation',
        areaName: '혁신 문화',
        question: '스타트업이나 혁신 기업과 협력합니다',
        tooltip: '외부 혁신 생태계와 연결되어 새로운 아이디어를 받아들이고 있는지 확인합니다'
    },
    {
        id: 'dx-innovation-5',
        category: 'dx',
        area: 'innovation',
        areaName: '혁신 문화',
        question: '빠른 실행과 반복 개선(Iteration)을 중시합니다',
        tooltip: '완벽함보다 빠른 출시와 지속적 개선을 추구하는지 평가합니다'
    },
    {
        id: 'dx-innovation-6',
        category: 'dx',
        area: 'innovation',
        areaName: '혁신 문화',
        question: '경영진이 디지털 혁신을 적극적으로 주도합니다',
        tooltip: '리더십이 디지털 혁신의 중요성을 인식하고 솔선수범하는지 확인합니다'
    }
];

// 산업군별 벤치마크 데이터 (평균 점수)
const industryBenchmarks = {
    manufacturing: {
        name: '제조업',
        scores: {
            understanding: 62,
            journey: 58,
            omnichannel: 55,
            feedback: 60,
            culture: 57,
            strategy: 65,
            infrastructure: 68,
            data: 63,
            capability: 60,
            innovation: 58
        }
    },
    service: {
        name: '서비스업',
        scores: {
            understanding: 68,
            journey: 65,
            omnichannel: 62,
            feedback: 70,
            culture: 66,
            strategy: 63,
            infrastructure: 60,
            data: 58,
            capability: 62,
            innovation: 64
        }
    },
    it: {
        name: 'IT/소프트웨어',
        scores: {
            understanding: 72,
            journey: 70,
            omnichannel: 75,
            feedback: 73,
            culture: 71,
            strategy: 78,
            infrastructure: 82,
            data: 80,
            capability: 79,
            innovation: 81
        }
    },
    retail: {
        name: '유통/리테일',
        scores: {
            understanding: 70,
            journey: 68,
            omnichannel: 72,
            feedback: 69,
            culture: 65,
            strategy: 66,
            infrastructure: 64,
            data: 67,
            capability: 63,
            innovation: 65
        }
    },
    finance: {
        name: '금융/보험',
        scores: {
            understanding: 66,
            journey: 64,
            omnichannel: 68,
            feedback: 67,
            culture: 63,
            strategy: 72,
            infrastructure: 75,
            data: 73,
            capability: 70,
            innovation: 66
        }
    }
};

// 개선 제안 템플릿
const recommendations = {
    understanding: {
        initial: [
            '고객 데이터 수집 체계를 구축하고 기본적인 고객 정보(인구통계, 구매이력)를 정리하세요',
            '간단한 고객 만족도 설문을 시작하여 정기적으로 고객의 소리를 듣는 습관을 만드세요',
            '주요 고객 세그먼트 2-3개를 정의하고 각 그룹의 특성을 파악하세요'
        ],
        developing: [
            'VoC 수집 채널을 다양화하고(설문, 인터뷰, SNS 모니터링) 통합 관리 시스템을 도입하세요',
            'NPS, CSAT 등 표준화된 지표를 활용하여 고객 만족도를 정기적으로 측정하세요',
            '고객 데이터 분석을 통해 세그먼트별 니즈와 페인포인트를 구체화하세요'
        ],
        mature: [
            '고객 행동 예측 모델을 개발하여 선제적 대응 체계를 구축하세요',
            '고객 인사이트를 전사적으로 공유하는 정기 포럼이나 리포트를 운영하세요',
            '실시간 고객 데이터 대시보드를 구축하여 의사결정에 활용하세요'
        ],
        leading: [
            'AI 기반 고객 행동 예측 및 개인화 추천 시스템을 고도화하세요',
            '고객 라이프타임 밸류(LTV) 분석을 통해 장기적 관계 관리 전략을 수립하세요',
            '업계 최고 수준의 고객 이해 역량을 벤치마킹 사례로 공유하고 확산하세요'
        ]
    },
    journey: {
        initial: [
            '주요 고객 여정(구매, 서비스 이용 등)을 간단하게 맵핑하고 시각화하세요',
            '고객 여정의 주요 접점(Touchpoint)을 식별하고 목록화하세요',
            '고객이 가장 불편해하는 지점 3가지를 파악하고 개선 계획을 수립하세요'
        ],
        developing: [
            '상세한 고객 여정 맵을 작성하고 각 단계별 고객의 감정과 니즈를 표현하세요',
            '여정상의 마찰 요소를 체계적으로 발굴하고 우선순위를 정하여 개선하세요',
            '여정 개선을 위한 크로스펑셔널 팀을 구성하고 정기 회의를 운영하세요'
        ],
        mature: [
            '고객 여정의 각 단계별 전환율, 이탈률 등 핵심 지표를 측정하고 모니터링하세요',
            '페르소나별로 차별화된 여정을 설계하고 최적화하세요',
            '고객 여정 개선 성과를 정량적으로 측정하고 지속적으로 업데이트하세요'
        ],
        leading: [
            '실시간 여정 분석을 통해 고객 행동에 즉각 대응하는 시스템을 구축하세요',
            '예측 분석을 활용하여 고객 이탈을 사전에 방지하는 프로액티브 여정을 설계하세요',
            '업계 최고 수준의 고객 여정 사례를 만들고 혁신 사례로 발표하세요'
        ]
    },
    omnichannel: {
        initial: [
            '현재 운영 중인 모든 고객 접점 채널을 파악하고 목록화하세요',
            '모바일 웹/앱의 기본적인 사용성을 개선하고 주요 기능을 최적화하세요',
            '온라인과 오프라인 채널 간 기본 정보(재고, 가격 등)를 일치시키세요'
        ],
        developing: [
            '채널 간 고객 데이터 연동을 시작하여 끊김없는 경험의 기반을 마련하세요',
            '고객이 선호하는 커뮤니케이션 채널(이메일, 카톡, 문자 등)을 파악하고 제공하세요',
            '채널별 고객 만족도를 측정하고 개선 활동을 시작하세요'
        ],
        mature: [
            '완전한 옴니채널 경험을 제공하여 고객이 채널을 자유롭게 이동할 수 있게 하세요',
            '채널별 고객 경험 품질을 지속적으로 모니터링하고 일관성을 유지하세요',
            '새로운 채널(챗봇, 음성 AI 등)을 실험하고 고객 반응을 테스트하세요'
        ],
        leading: [
            'AI 기반 채널 추천으로 고객에게 최적의 접점을 제안하세요',
            '메타버스, AR/VR 등 차세대 채널을 선제적으로 도입하고 실험하세요',
            '업계 최고 수준의 옴니채널 경험을 제공하고 혁신 사례로 공유하세요'
        ]
    },
    feedback: {
        initial: [
            '고객 피드백 수집 채널(이메일, 전화, 게시판 등)을 명확히 하고 안내하세요',
            '고객 불만 처리 담당자와 프로세스를 지정하고 대응 시간 목표를 설정하세요',
            '월 1회 고객 피드백을 검토하고 주요 이슈를 파악하세요'
        ],
        developing: [
            '실시간 피드백 수집 도구(설문, 챗봇 등)를 도입하고 신속 대응 체계를 구축하세요',
            '고객 피드백을 분류하고 우선순위를 정하여 체계적으로 관리하세요',
            '피드백 반영 사례를 고객에게 공유하여 참여를 독려하세요'
        ],
        mature: [
            '고객 피드백을 제품/서비스 개선 로드맵에 반영하는 프로세스를 정립하세요',
            '텍스트 분석 등을 활용하여 피드백에서 인사이트를 자동으로 도출하세요',
            '피드백 대응률, 해결률 등 KPI를 설정하고 지속적으로 개선하세요'
        ],
        leading: [
            'AI 기반 감성 분석으로 고객 피드백의 긍정/부정 트렌드를 실시간 파악하세요',
            '고객 커뮤니티를 운영하여 피드백을 넘어 공동 창조(Co-creation)를 실현하세요',
            '업계 최고 수준의 피드백 시스템을 구축하고 벤치마킹 사례로 공유하세요'
        ]
    },
    culture: {
        initial: [
            '경영진이 고객 중심의 중요성을 선언하고 전사에 메시지를 전달하세요',
            'CX 관련 기본 교육(고객 응대, 서비스 마인드 등)을 실시하세요',
            '고객 만족 우수 사례를 발굴하고 공유하는 자리를 마련하세요'
        ],
        developing: [
            'CX 전담 조직이나 책임자를 지정하고 권한과 자원을 부여하세요',
            '정기적인 CX 교육 프로그램을 운영하고 전 직원이 참여하도록 하세요',
            '부서 간 협업 프로젝트를 통해 통합적 고객 경험 제공 경험을 쌓으세요'
        ],
        mature: [
            'CX 성과를 평가 지표에 포함하고 우수 사례에 보상하세요',
            '고객 중심 사고가 일상적 의사결정에 자연스럽게 반영되도록 문화를 정착시키세요',
            'CX 혁신 아이디어를 제안하고 실행하는 제도를 운영하세요'
        ],
        leading: [
            '고객 중심 문화가 조직의 DNA로 자리잡아 모든 활동의 기준이 되도록 하세요',
            'CX 우수 기업으로 인정받아 외부 벤치마킹 대상이 되세요',
            '업계 CX 문화 확산을 선도하고 모범 사례를 공유하세요'
        ]
    },
    strategy: {
        initial: [
            '디지털 전환의 필요성을 인식하고 경영진의 의지를 확인하세요',
            '현재 디지털 수준을 진단하고 개선이 필요한 영역을 파악하세요',
            '디지털 전환의 목표와 기대 효과를 명확히 정의하세요'
        ],
        developing: [
            '3-5년 디지털 전환 비전과 전략을 수립하고 전사에 공유하세요',
            '단계별 로드맵을 작성하고 우선순위 프로젝트를 선정하세요',
            '디지털 전환을 위한 예산을 확보하고 투자 계획을 수립하세요'
        ],
        mature: [
            '디지털 전략을 비즈니스 전략과 완전히 통합하고 연계하세요',
            '디지털 전환 KPI를 설정하고 정기적으로 성과를 모니터링하세요',
            '디지털 트렌드를 지속적으로 모니터링하고 전략에 반영하세요'
        ],
        leading: [
            '디지털을 통한 새로운 비즈니스 모델과 수익원을 창출하세요',
            '업계 디지털 전환을 선도하고 혁신 사례를 만드세요',
            '디지털 생태계를 구축하고 파트너와 협력하여 시너지를 창출하세요'
        ]
    },
    infrastructure: {
        initial: [
            '현재 IT 인프라 현황을 파악하고 문제점을 진단하세요',
            '기본적인 사이버 보안 체계(백신, 방화벽 등)를 구축하세요',
            '레거시 시스템 중 가장 시급한 개선 대상을 선정하세요'
        ],
        developing: [
            '클라우드 도입을 검토하고 일부 시스템을 클라우드로 이전하세요',
            'IT 시스템 안정성 향상을 위한 모니터링 체계를 구축하세요',
            'API 기반 시스템 연계를 시작하여 데이터 사일로를 해소하세요'
        ],
        mature: [
            '클라우드 우선(Cloud-First) 전략을 수립하고 전면 전환을 추진하세요',
            '레거시 시스템 현대화 로드맵을 실행하고 단계적으로 개선하세요',
            '포괄적인 사이버 보안 체계를 구축하고 정기적으로 점검하세요'
        ],
        leading: [
            '클라우드 네이티브 아키텍처로 전환하여 최고 수준의 민첩성을 확보하세요',
            '제로 트러스트 보안 모델을 도입하여 최고 수준의 보안을 구현하세요',
            '업계 최고 수준의 IT 인프라를 구축하고 벤치마킹 사례가 되세요'
        ]
    },
    data: {
        initial: [
            '주요 비즈니스 데이터가 무엇인지 파악하고 목록화하세요',
            '기본적인 데이터 수집과 저장 체계를 구축하세요',
            '엑셀 등 간단한 도구로 데이터 분석을 시작하세요'
        ],
        developing: [
            '데이터 웨어하우스나 데이터 레이크를 구축하여 데이터를 통합 관리하세요',
            'BI 도구를 도입하여 시각화된 리포트와 대시보드를 만드세요',
            '데이터 품질 관리 프로세스를 수립하고 정기적으로 점검하세요'
        ],
        mature: [
            '데이터 기반 의사결정 문화를 정착시키고 주요 결정에 데이터를 활용하세요',
            '머신러닝 모델을 개발하여 예측 분석과 최적화를 수행하세요',
            '데이터 거버넌스 체계를 구축하고 개인정보 보호를 강화하세요'
        ],
        leading: [
            'AI/빅데이터 분석을 통해 새로운 비즈니스 인사이트를 발굴하세요',
            '실시간 데이터 분석과 자동화된 의사결정 시스템을 구축하세요',
            '업계 최고 수준의 데이터 활용 역량을 보유하고 혁신 사례를 만드세요'
        ]
    },
    capability: {
        initial: [
            '조직의 디지털 역량 수준을 진단하고 격차를 파악하세요',
            '기본적인 디지털 도구 사용법 교육을 실시하세요',
            '디지털 인재 채용 계획을 수립하고 우선순위 포지션을 선정하세요'
        ],
        developing: [
            '체계적인 디지털 교육 프로그램을 운영하고 전 직원이 참여하도록 하세요',
            '디지털 전문 인력을 확보하고 핵심 역할에 배치하세요',
            '외부 전문가나 컨설팅을 활용하여 부족한 역량을 보완하세요'
        ],
        mature: [
            '애자일, 디자인씽킹 등 새로운 업무 방식을 도입하고 확산하세요',
            '디지털 프로젝트 수행 경험을 축적하고 베스트 프랙티스를 공유하세요',
            '디지털 역량을 평가하고 개발하는 체계적인 프로그램을 운영하세요'
        ],
        leading: [
            '업계 최고 수준의 디지털 인재를 보유하고 지속적으로 육성하세요',
            '디지털 혁신을 주도하는 CoE(Center of Excellence)를 운영하세요',
            '디지털 역량 우수 기업으로 인정받고 인재들이 선호하는 조직이 되세요'
        ]
    },
    innovation: {
        initial: [
            '실패를 학습 기회로 삼는 문화의 중요성을 경영진이 선언하세요',
            '임직원의 혁신 아이디어를 수렴하는 채널(제안함, 게시판 등)을 만드세요',
            '작은 규모의 혁신 실험 프로젝트를 시작하세요'
        ],
        developing: [
            '혁신 아이디어를 평가하고 실행을 지원하는 프로세스를 구축하세요',
            '신기술 PoC(Proof of Concept)를 정기적으로 수행하세요',
            '스타트업이나 외부 혁신 기업과의 협력 프로그램을 시작하세요'
        ],
        mature: [
            '빠른 실행과 반복 개선(Agile/Lean)을 조직 문화로 정착시키세요',
            '혁신 성과를 평가하고 보상하는 제도를 운영하세요',
            '오픈 이노베이션 프로그램을 통해 외부 아이디어를 적극 활용하세요'
        ],
        leading: [
            '지속적 혁신이 조직의 DNA로 자리잡아 경쟁 우위의 원천이 되도록 하세요',
            '업계 혁신을 선도하고 새로운 표준을 만드세요',
            '혁신 생태계의 중심이 되어 다른 기업들과 협력하고 시너지를 창출하세요'
        ]
    }
};

// 성숙도 레벨 정의
const maturityLevels = {
    initial: { name: '초기', min: 0, max: 40, color: '#ef4444', description: '체계적인 접근 부재, 기초 수준' },
    developing: { name: '발전', min: 41, max: 60, color: '#f59e0b', description: '일부 영역에서 개선 시작' },
    mature: { name: '성숙', min: 61, max: 80, color: '#3b82f6', description: '대부분 영역에서 체계적 운영' },
    leading: { name: '선도', min: 81, max: 100, color: '#10b981', description: '업계 최고 수준, 지속적 혁신' }
};

// 영역 한글명 매핑
const areaNames = {
    understanding: '고객 이해',
    journey: '여정 설계',
    omnichannel: '옴니채널 경험',
    feedback: '피드백 시스템',
    culture: 'CX 조직문화',
    strategy: '디지털 전략',
    infrastructure: '기술 인프라',
    data: '데이터 활용',
    capability: '조직 역량',
    innovation: '혁신 문화'
};
