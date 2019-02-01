(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  // Turn into Asyncronous call in order to handle
  // Api fetch Promise
  ImageFinder.prototype.search = async (query, moduleId) => {
    if (moduleId === 'flickr') {
      return {
        query,
        images: await window.MODULES.flickr(query)
      };
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
