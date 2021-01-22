window.onload = function () {
  function backToTopButton() {
    const buttonToTop = document.getElementById('toTopButton');

    window.onscroll = () => {
      const buttonToTop = document.getElementById('toTopButton');
      const yScrollAxis = window.pageYOffset;

      yScrollAxis > 300
        ? (buttonToTop.style.display = 'block')
        : (buttonToTop.style.display = 'none');
    };

    buttonToTop.onclick = () => {
      window.scrollBy(0, -1 * window.pageYOffset);
    };
  }

  backToTopButton();
};
