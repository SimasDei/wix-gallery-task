(function() {
  var ImageFinder = (window.CLASSES.ImageFinder = function() {});

  // Turn into Asyncronous call in order to handle
  // Api fetch Promise
  ImageFinder.prototype.search = async (query, moduleId) => {
    // Use Switch instead to not get an unknown module error on page load
    switch (moduleId) {
      case 'static':
        return {
          query: query,
          images: window.MODULES.static(query)
        };
        break;
      case 'flickr':
        return {
          query,
          images: await window.MODULES.flickr(query)
        };

      case !'static' || !'flickr':
        const error = 'Unknown Module';
        throw error;
        break;
      default:
        return {
          query: query,
          images: window.MODULES.static(query)
        };
        break;
    }

    // if (moduleId === 'flickr') {
    //   return {
    //     query,
    //     images: await window.MODULES.flickr(query)
    //   };
    // } else if (moduleId === 'static') {
    //   return {
    //     query: query,
    //     images: window.MODULES.static(query)
    //   };
    // } else {
    //   let error = 'Unknown Search Module';
    //   throw error;
    // }
  };
})();
