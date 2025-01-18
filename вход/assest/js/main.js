document.getElementById('phone-button').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}
const accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
        title.classList.toggle('active');
        
        accordionTitles.forEach(otherTitle => {
            if (otherTitle !== title) {
                otherTitle.nextElementSibling.style.display = "none";
                otherTitle.classList.remove('active');
            }
        });
        
        if (content.style.display === "block") {
            title.classList.add('active');
        } else {
            title.classList.remove('active');
        }
        
      });
});
