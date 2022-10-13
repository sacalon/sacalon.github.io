if (!location.href.replace(location.origin, "").includes("htm")) {
  location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", () => {
  const doc = $("#header-section");
  doc.on("load", function () {
    doc
      .contents()
      .find(".navbar-toggler")
      .on("click", function () {
        if ($(this).attr("aria-expanded") == "false") {
          doc.css(
            "height",
            "+=" + doc.contents().find(".navbar-collapse").height()
          );

          $("#header-section + *").css(
            "margin-top",
            "+=" + doc.contents().find(".navbar-collapse").height()
          );
        } else {
          doc.removeAttr("style")
          $("#header-section + *").removeAttr("style");
        }
      });

    let active = null;
    if (location.href.match(/index.html$/) != null) active = 0;

    doc.contents().find(`.navbar-collapse .nav-item:nth-of-type(${active+1})`).addClass("active");
  });
});
