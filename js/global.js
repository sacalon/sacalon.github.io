if (!location.href.replace(location.origin, "").includes("htm")) {
  location.replace("index.html");
}

function getPageName() {
  if (location.href.match(/index.html$/) != null) {
    return "index";
  } else if (location.href.match(/style.html$/) != null) {
    return "style";
  } else if (location.href.match(/foundation.html$/) != null) {
    return "foundation";
  } else if (location.href.match(/news.html$/) != null) {
    return "news";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function goto(elements) {
    elements.each(function () {
      let href = $(this).attr("data-href");

      href = href.replace(/\[name\]/g, getPageName());

      $(this).attr("href", "../" + href);

      $(this).on("click", (e) => {
        e.preventDefault();
        location.assign(href);
      });
    });
  }

  const header = $("#header-section");
  header.on("load", function () {
    header
      .contents()
      .find(".navbar-toggler")
      .on("click", function () {
        if ($(this).attr("aria-expanded") == "false") {
          header.css(
            "height",
            "+=" + header.contents().find(".navbar-collapse").height()
          );

          $("#header-section + *").css(
            "margin-top",
            "+=" + header.contents().find(".navbar-collapse").height()
          );
        } else {
          header.removeAttr("style");
          $("#header-section + *").removeAttr("style");
        }
      });

    let active = null;
    switch (getPageName()) {
      case "index":
        active = 0;
        break;

      case "style":
        active = 5;
        break;

      case "news":
        active = 3;
        break;

      case "foundation":
        active = 4;
        break;

      default:
        break;
    }

    header
      .contents()
      .find(`.navbar-collapse .nav-item:nth-of-type(${active + 1})`)
      .addClass("active");

    //add link's href
    goto(header.contents().find("a[data-href]"));
  });

  const footer = $("#footer-section");
  footer.on("load", () => {
    //add link's href
    goto(footer.contents().find("a"));
  });
});
