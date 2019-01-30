(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query) {
    console.log(query);
    let db = window.DATA.staticImagesDb;
    let images = db.filter(image => image.title.includes(query));
    console.log(images);
    return {
      query: query,
      images: images
    };
  };
})();
