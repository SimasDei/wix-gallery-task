(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query) {
    console.log(query);
    let db = window.DATA.staticImagesDb;
    let obj = db.find(o => o.title === query);

    return {
      query: query,
      images: obj
    };
  };
})();
