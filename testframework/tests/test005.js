describe('Task 5 - Nuts & Bolts', function(){
  
  var taskDesc = '<p>Now that <code>search()</code> return results asynchronously,' +
      ' it might cause unwanted old results to be returned before or <strong>after</strong> newer queries.' +
      'Change <code>search()</code> so that it will cancel previous searches when a new query is executed.</p>';

  describe(taskDesc, function(){
    it('async flickr result test', function(){
      var gallery = new GalleryClass(window.imageFinder);
      spyOn(gallery, '_onSearchResultReady');

      runs(function(){
        gallery.doSearch('dog', 'flickr');
        gallery.doSearch('dogs', 'flickr');
      });

      waits(2000); // Need to wait for real requests to return
      waitsFor(function(){ return gallery._onSearchResultReady.callCount > 0; }, 'imageFinder to return results', 3000);

      runs(function(){
        var results = gallery._onSearchResultReady.calls[0].args[0];

        expect(gallery._onSearchResultReady.callCount).toBe(1);
        
        expect(results.query, 'check result query').toBe('dogs');
        
      });
    });
  });
});