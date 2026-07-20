(function () {
  // Single source of truth for the docs left-tree. Add a page here and it shows
  // up in the sidebar on every docs page. Active link is set from the URL.
  var tree = [
    { label: null, items: [
      { t: "Overview", h: "/docs/" },
    ] },
    { label: "Data & Sourcing", items: [
      { t: "Federal", h: "/docs/data-sources/federal/" },
      { t: "California", h: "/docs/data-sources/california/" },
      { t: "Oregon", h: "/docs/data-sources/oregon/" },
      { t: "Cities & counties", h: "/docs/data-sources/local/" },
    ] },
    { label: null, items: [
      { t: "Methodology", h: "/company/methodology/" },
    ] },
  ];

  var path = location.pathname.replace(/index\.html$/, "");
  if (!path.endsWith("/")) path += "/";

  var html = tree.map(function (g) {
    var links = g.items.map(function (it) {
      var active = path === it.h ? " active" : "";
      return '<a class="docs-nav-link' + active + '" href="' + it.h + '"'
        + (active ? ' aria-current="page"' : '') + '>' + it.t + '</a>';
    }).join("");
    var label = g.label ? '<div class="docs-nav-label">' + g.label + '</div>' : "";
    return '<div class="docs-nav-group">' + label + links + '</div>';
  }).join("");

  var el = document.getElementById("docs-tree");
  if (el) el.innerHTML = html;
})();
