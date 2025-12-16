// PDF 다운로드 기능을 위한 유틸리티 함수

// 기존 downloadResults 함수를 오버라이드
window.addEventListener('DOMContentLoaded', () => {
    // 기존 이벤트 리스너 제거 후 새로운 리스너 추가
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        // 기존 리스너 복제 및 교체
        const newDownloadBtn = downloadBtn.cloneNode(true);
        downloadBtn.parentNode.replaceChild(newDownloadBtn, downloadBtn);

        // 새로운 PDF 다운로드 리스너 추가
        newDownloadBtn.addEventListener('click', downloadResultsAsPDF);
    }
});

async function downloadResultsAsPDF() {
    const resultContent = document.getElementById('result-content');
    const actionButtons = document.querySelector('.action-buttons');

    // 버튼 임시 숨김
    actionButtons.style.display = 'none';

    try {
        // html2canvas로 결과 화면 캡처
        const canvas = await html2canvas(resultContent, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false
        });

        // 버튼 다시 표시
        actionButtons.style.display = 'flex';

        // jsPDF 인스턴스 생성
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // 캔버스를 이미지로 변환
        const imgData = canvas.toDataURL('image/png');

        // A4 크기 계산 (210mm x 297mm)
        const pdfWidth = 210;
        const pdfHeight = 297;

        // 이미지 비율 계산
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;

        // PDF에 맞게 이미지 크기 조정 (여백 10mm)
        let width = pdfWidth - 20;
        let height = width / ratio;

        // 높이가 PDF를 넘으면 여러 페이지로 분할
        if (height > pdfHeight - 20) {
            height = pdfHeight - 20;
            width = height * ratio;
        }

        // 중앙 정렬을 위한 x 좌표
        const x = (pdfWidth - width) / 2;

        // 이미지를 PDF에 추가
        pdf.addImage(imgData, 'PNG', x, 10, width, height);

        // 파일명 생성
        const date = new Date().toISOString().split('T')[0];
        const fileName = `CX-DX진단결과_${date}.pdf`;

        // PDF 저장
        pdf.save(fileName);

        alert(`PDF 파일이 다운로드 폴더에 저장되었습니다.\n파일명: ${fileName}`);

    } catch (error) {
        // 버튼 다시 표시
        actionButtons.style.display = 'flex';
        console.error('PDF 생성 중 오류:', error);
        alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
}
