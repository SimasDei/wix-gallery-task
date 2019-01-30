describe('Task 4 - Multiple requests', function(){
  
  var taskDesc = '<p>Add functionality to your <code>search()</code> to be able to accept requests from multiple galleries and route the search results to the appropriate gallery instance.</p>' +
      "<li><p><strong>Bonus</strong> - Add a second functioning gallery</p></li>";

  describe(taskDesc, function(){

    it('accept requests from multiple galleries test', function(){
      var gallery = new GalleryClass(window.imageFinder);
      var gallery2 = new GalleryClass(window.imageFinder);
      spyOn(gallery, '_onSearchResultReady');
      spyOn(gallery2, '_onSearchResultReady');

      runs(function(){
        gallery.doSearch('dog', 'flickr');
        gallery2.doSearch('dogs', 'flickr');
      });

      waitsFor(function(){
        return gallery._onSearchResultReady.callCount > 0 && gallery2._onSearchResultReady.callCount > 0;
      }, 'imageFinder to return results', 3000);

      runs(function(){
        var results1 = gallery._onSearchResultReady.calls[0].args[0];
        var results2 = gallery2._onSearchResultReady.calls[0].args[0];
        
        expect(results1.query, 'check result query for gallery 1').toBe('dog');
        expect(results2.query, 'check result query for gallery 2').toBe('dogs');

      });
    });
  });
});