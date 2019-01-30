(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  ImageFinder.prototype.search = function(query, moduleId) {
    if (moduleId === 'flickr') {
      return window.MODULES.flick();
    } else if (moduleId === 'static') {
      return {
        query: query,
        images: window.MODULES.static(query)
      };
    } else {
      let error = 'Unknown Search Module';
      throw error;
    }
  };
})();
