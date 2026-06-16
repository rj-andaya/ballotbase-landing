(function () {
  var html = [
    '<nav>',
    '  <div class="nav-logo">',
    '    <a href="/"><img src="/ballotbase-web-logo.png" alt="BallotBase" /></a>',
    '  </div>',
    '  <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Toggle navigation">',
    '    <span class="nav-menu-label">MENU</span>',
    '    <span class="nav-bars"><span></span><span></span><span></span></span>',
    '  </button>',
    '  <div class="nav-right">',
    '    <a href="/features/" class="nav-link">Features</a>',
    '    <div class="nav-dropdown">',
    '      <button class="nav-dropdown-trigger">Solutions ▾</button>',
    '      <div class="nav-dropdown-menu">',
    '        <div class="nav-dropdown-section-label">By Role</div>',
    '        <a href="/solutions/political-consultants/" class="nav-dropdown-item">For Political Consultants</a>',
    '        <a href="/solutions/campaign-managers/" class="nav-dropdown-item">For Campaign Managers</a>',
    '        <a href="/solutions/journalists/" class="nav-dropdown-item">For Journalists</a>',
    '        <div class="nav-dropdown-divider"></div>',
    '        <div class="nav-dropdown-section-label">Data Coverage</div>',
    '        <a href="/solutions/federal/" class="nav-dropdown-item">Federal</a>',
    '        <a href="/solutions/california/" class="nav-dropdown-item">California</a>',
    '        <a href="/solutions/nevada/" class="nav-dropdown-item">Nevada</a>',
    '        <span class="nav-dropdown-item disabled">Texas — Coming Soon</span>',
    '        <span class="nav-dropdown-item disabled">New York — Coming Soon</span>',
    '      </div>',
    '    </div>',
    '    <a href="/blog/" class="nav-link">Blog</a>',
    '    <a href="mailto:rj@ballotbase.io" class="nav-link">Contact</a>',
    '    <a href="/#beta" class="nav-cta">Get a Live Demo</a>',
    '  </div>',
    '</nav>'
  ].join('\n');

  document.currentScript.insertAdjacentHTML('beforebegin', html);

  var dropdown = document.querySelector('.nav-dropdown');
  if (!dropdown) return;
  var menu = dropdown.querySelector('.nav-dropdown-menu');
  var dropTimer;
  function isMobile() { return window.innerWidth <= 768; }

  dropdown.addEventListener('mouseenter', function () { if (isMobile()) return; clearTimeout(dropTimer); menu.style.display = 'block'; });
  dropdown.addEventListener('mouseleave', function () {
    if (isMobile()) return;
    dropTimer = setTimeout(function () { menu.style.display = ''; }, 150);
  });
  dropdown.querySelector('.nav-dropdown-trigger').addEventListener('click', function (e) {
    if (!isMobile()) return;
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? '' : 'block';
  });

  document.addEventListener('click', function (e) {
    var nav = document.querySelector('nav');
    if (nav && nav.classList.contains('nav-open') && !nav.contains(e.target)) {
      nav.classList.remove('nav-open');
    }
  });
}());

window.toggleMobileNav = function () {
  var nav = document.querySelector('nav');
  var isOpen = nav.classList.toggle('nav-open');
  if (!isOpen) {
    var menu = document.querySelector('.nav-dropdown-menu');
    if (menu) menu.style.display = '';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var shots = document.querySelectorAll('.ca-screenshot-frame img, .wf-img-wrap img');
  if (!shots.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'img-lightbox-overlay';
  overlay.innerHTML = '<button class="img-lightbox-close" aria-label="Close">&times;</button><img />';
  document.body.appendChild(overlay);
  var overlayImg = overlay.querySelector('img');

  function close() { overlay.classList.remove('active'); }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  shots.forEach(function (img) {
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add('active');
    });
  });
});
