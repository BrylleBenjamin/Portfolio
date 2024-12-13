function toggleContent(paragraphId) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(p => {
        if (p.id !== paragraphId) {
            p.style.display = 'none';
        }
    });

    const paragraph = document.getElementById(paragraphId);
    paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('scroll', () => {
    const footer = document.getElementById('dynamicFooter');
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {

        footer.style.bottom = "0";
    } else {
   
        footer.style.bottom = "-100px";
    }
});