(function() {
  /**
   * @constructor
   * @param {ImageFinder} imageFinder
   */
  var Gallery = (window.CLASSES.Gallery = function(imageFinder) {
    this._imageFinder = imageFinder;
    this._createInterface();
    this._setFunctionality();
  });

  /**
   * start a new search
   * @param {String} query - search term to look for
   * @param {String} moduleId - specify which API to query
   * Reformat into Async function to handle the API fetch Promise
   */
  Gallery.prototype.doSearch = async function(query, moduleId) {
    var searchResults = await this._imageFinder.search(query, moduleId);
    this._onSearchResultReady(searchResults);
  };

  /**
   * Handle search button clicks
   */
  Gallery.prototype._onSearchButtonClick = function(e) {
    // Search input value
    var query = this._queryInputNode.value;
    // Get value from the select input, pass as moduleID
    let moduleId = this._querySelectInputNode.value;
    console.log(moduleId);
    // Pass moduleId into search onClick listener
    this.doSearch(query, moduleId);
  };

  /**
   * update gallery content with search results
   * @param {query:String{images:[{id:String, url:string, title:string}]}} searchResult - results object for gallery update
   */
  Gallery.prototype._onSearchResultReady = function(searchResult) {
    this._resultsNode.innerHTML = '';
    var imagesData = searchResult.images;
    for (var i = 0; i < imagesData.length; ++i) {
      var imgNode = document.createElement('img');
      imgNode.setAttribute('src', imagesData[i].url);
      this._resultsNode.appendChild(imgNode);
    }
  };

  /**
   * adds gallery main view node as child node
   * @param {htmlElement} node - html element to append to
   */
  Gallery.prototype.addToNode = function(node) {
    node.appendChild(this._viewNode);
  };

  /**
   * add search functionality to gallery
   */
  Gallery.prototype._setFunctionality = function() {
    // Bind function to instance
    var that = this;
    var originalOnSearchButtonClick = that._onSearchButtonClick;
    this._onSearchButtonClick = function() {
      originalOnSearchButtonClick.apply(that, arguments);
    };
    this._searchBtnNode.addEventListener('click', this._onSearchButtonClick);
  };

  /**
   * creates gallery view, inner structure and ui
   */
  Gallery.prototype._createInterface = function() {
    this._viewNode = document.createElement('div');
    this._viewNode.classList.add('gallery');

    this._resultsNode = document.createElement('div');
    this._resultsNode.classList.add('galleryItems');
    this._viewNode.appendChild(this._resultsNode);

    this._controlsNode = document.createElement('div');
    this._controlsNode.classList.add('galleryControls');
    this._viewNode.appendChild(this._controlsNode);

    this._queryInputNode = document.createElement('input');
    this._controlsNode.appendChild(this._queryInputNode);

    this._searchBtnNode = document.createElement('button');
    this._searchBtnNode.innerHTML = 'search';
    this._controlsNode.appendChild(this._searchBtnNode);

    // Add Select Element, target value to pass as moduleId
    // Option One = Static, Option Two = Flickr
    this._querySelectInputNode = document.createElement('select');
    // Options
    this._querySelectOptionNodeOne = document.createElement('option');
    this._querySelectOptionNodeOne.innerHTML = 'static';
    this._querySelectOptionNodeTwo = document.createElement('option');
    this._querySelectOptionNodeTwo.innerHTML = 'flickr';
    // Append to Gallery Controls
    this._querySelectInputNode.appendChild(this._querySelectOptionNodeOne);
    this._controlsNode.appendChild(this._querySelectInputNode);
    this._querySelectInputNode.appendChild(this._querySelectOptionNodeTwo);
    this._controlsNode.appendChild(this._querySelectInputNode);
  };
})();
