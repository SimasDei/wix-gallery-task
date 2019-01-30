(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query, moduleId) {
    if (moduleId !== 'flikr') {
      return {
        query: query,
        images: window.MODULES.static(query)
      };
    }
  };
})();
