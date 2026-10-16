document.querySelectorAll('.thumbnails').forEach(gallery => {
  gallery.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const image = gallery.parentElement.querySelector('a > img');
      image.src = button.dataset.image;
      image.alt = button.getAttribute('aria-label');
      gallery.querySelectorAll('button').forEach(item => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
    });
  });
});
