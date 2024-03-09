// index.js

document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll('.project-name');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const projectName = this.dataset.projectName;
            openPdf(projectName);
        });
    });

    function openPdf(projectName) {
        const pdfFilePath = `pdf_files/${projectName}.pdf`;
        window.open(pdfFilePath, '_blank');
    }
});
