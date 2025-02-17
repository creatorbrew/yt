document.addEventListener("DOMContentLoaded", function () {
  // Left Nav Items
  const navItems = document.querySelectorAll('.sidebar__nav .nav-item');
  navItems.forEach(item => {
    if (item.querySelector('span').textContent.trim() === "Home") {
      item.classList.add('selected');
    }
  });
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navItems.forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Top Button Container
  const topBtns = document.querySelectorAll('.top-button-container .top-btn');
  topBtns.forEach(btn => {
    if (btn.textContent.trim() === "All") {
      btn.classList.add('selected');
    }
  });
  topBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      topBtns.forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});
