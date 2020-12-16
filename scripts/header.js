document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const header = document.querySelector('.header');
    const isHeaderFixed = getComputedStyle(header).opacity >= 1;

    const topOffset = isHeaderFixed ? 0 : header.offsetHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
