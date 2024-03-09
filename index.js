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
        // Replace 'pdf_file_path.pdf' with the actual path to your PDF file
        const pdfFilePath = `pdf_files/${projectName}.pdf`;
        window.open(pdfFilePath, '_blank');
    }
});
