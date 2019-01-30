describe('Task 2 - Search Modules', function(){

  var taskDesc = '<p>Modify your implementation of <code>ImageFinder</code> to include a way of adding <strong>search modules</strong>. Each module accepts a search query and returns the search results in the same format as task 1.</p>' +
           "<p>Move your search functionality of DATA.staticImagesDb into its own module - name it 'static'.</p>" +
           "<p><code>ImageFinder</code> should throw an exception for unknown modules.</p>" +
           "<p>Add the static module to the global imageFinder instance.</p>" +
           "<p>Change <code>Gallery.doSearch()</code> to use your new <code>ImageFinder</code> implementation - it should now accept query and module id:<br/>" +
           "<code>gallery.doSearch(query, moduleId)</code>.</p>"

  describe(taskDesc, function(){

    it('throw error for unknown module', function(){
      var gallery = new GalleryClass(window.imageFinder);

      expect(function(){
        gallery.doSearch('dog', 'notARealModuleId');
      }).toThrow();
    });

    it('general return static result test', function(){
      var gallery = new GalleryClass(window.imageFinder);
      spyOn(gallery, '_onSearchResultReady');

      runs(function(){
        gallery.doSearch('dog', 'static');
      });

      waitsFor(function(){ return gallery._onSearchResultReady.callCount > 0; }, 'imageFinder to return results', 100);

      runs(function(){
        var results = gallery._onSearchResultReady.calls[0].args[0];

        expect(results.images instanceof Array, 'check that results.images is an Array').toBeTruthy();

        expect(results.images.length).toBe(5);

        expect(results.images).toContain({
          id: 'vHmdG5nncVmJQNaMyeqR6w--a',
          url: 'http://static.wix.com/media/cc9d8bc0f8b1a5338ee79d9eb155d1c4.wix_mp',
          title: 'small dogs'});

        expect(results.images).toContain({
          id: 'AtYPWBjL5BMVxob0OfmLQg--a',
          url: 'http://static.wix.com/media/fb376dd2473759bbb248dc4f1b23730e.wix_mp',
          title: 'dogfood'});

        expect(results.images).toContain({
          id: 'dORmr6W5WoH_M48WWcUuQw--a',
          url: 'http://static.wix.com/media/85252fdf939e9b37fa16d1f3b2d197e9.wix_mp',
          title: 'dog run'});

        expect(results.images).toContain({
          id: 'gyFHUTuQUJamSHp3VNiJpw--a',
          url: 'http://static.wix.com/media/16f9f8e6e00718d108a8889351874fb4.wix_mp',
          title: 'book dog'});

        expect(results.images).toContain({
          id: 't2SVVJ_a0ESmUC0CVRpGZQ--a',
          url: 'http://static.wix.com/media/7f093ca6c9945ebb918772e55cd7b89f.wix_mp',
          title: 'office dog'});

      });
    });
  });
});