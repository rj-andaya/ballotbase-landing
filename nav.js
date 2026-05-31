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
    '        <a href="/solutions/federal/" class="nav-dropdown-item">Federal</a>',
    '        <div class="nav-dropdown-submenu">',
    '          <div class="nav-dropdown-item">State &amp; Local ›</div>',
    '          <div class="nav-submenu-panel">',
    '            <a href="/solutions/california/" class="nav-dropdown-item">California</a>',
    '            <a href="/solutions/nevada/" class="nav-dropdown-item">Nevada</a>',
    '            <span class="nav-dropdown-item disabled">Texas — Coming Soon</span>',
    '            <span class="nav-dropdown-item disabled">New York — Coming Soon</span>',
    '          </div>',
    '        </div>',
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
  var submenu = dropdown.querySelector('.nav-dropdown-submenu');
  var panel = submenu ? submenu.querySelector('.nav-submenu-panel') : null;
  var dropTimer, subTimer;
  function isMobile() { return window.innerWidth <= 768; }

  dropdown.addEventListener('mouseenter', function () { if (isMobile()) return; clearTimeout(dropTimer); menu.style.display = 'block'; });
  dropdown.addEventListener('mouseleave', function () {
    if (isMobile()) return;
    dropTimer = setTimeout(function () { menu.style.display = ''; if (panel) panel.style.display = ''; }, 150);
  });
  dropdown.querySelector('.nav-dropdown-trigger').addEventListener('click', function (e) {
    if (!isMobile()) return;
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? '' : 'block';
  });
  if (submenu && panel) {
    submenu.addEventListener('mouseenter', function () { if (isMobile()) return; clearTimeout(subTimer); panel.style.display = 'block'; });
    submenu.addEventListener('mouseleave', function () { if (isMobile()) return; subTimer = setTimeout(function () { panel.style.display = ''; }, 150); });
    submenu.querySelector('.nav-dropdown-item').addEventListener('click', function (e) {
      if (!isMobile()) return;
      e.stopPropagation();
      panel.style.display = panel.style.display === 'block' ? '' : 'block';
    });
  }

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
    var panel = document.querySelector('.nav-submenu-panel');
    if (menu) menu.style.display = '';
    if (panel) panel.style.display = '';
  }
};
