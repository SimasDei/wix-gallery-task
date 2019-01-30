describe('Task 3 - Async Flickr Module', function(){
  
  var taskDesc = '<p>Add a flickr search module to the system using the following credentials:<br/>' +
          '<code>Flickr API<br/>' +
          "api_key: 'b394136d5dde8d9d0d4f8fc6685386e2'</code></p>" +
          "<p><li>Don't reduce flickr results amount (100)</li>" +
          '<li><strong>Bonus</strong> - Add a drop down menu in gallery to select a search module (static / flickr).</li></p>';

  describe(taskDesc, function(){
    it('async flickr result test', function(){
      var gallery = new GalleryClass(window.imageFinder);
      spyOn(gallery, '_onSearchResultReady');

      runs(function(){
        gallery.doSearch('dog', 'flickr');
      });

      waitsFor(function(){ return gallery._onSearchResultReady.callCount > 0; }, 'imageFinder to return results', 3000);

      runs(function(){
        var results = gallery._onSearchResultReady.calls[0].args[0];
        
        expect(results.query).toBe('dog');

        expect(results.images instanceof Array, 'check that results.images is an Array').toBeTruthy();

        expect(results.images.length).toBe(100);

        // ToDo: add more specific tests
      });
    });
  });
});