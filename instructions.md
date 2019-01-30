# 1.
refactor or extend `ImageFinder.search()` so it will return results from `DATA.staticImagesDb` (use the query on the title field).

the returned results should be in the following format:

```
{
  images: [
    {
      id: '#######',
      url: 'http://image.url',
      title: 'image title'
    }
  ]
}
```

# 2.

change your `ImageFinder` implementation so that it will have a way of adding search modules (all modules should return results in the same format).

2.1 move your base search functionality of `DATA.staticImagesDb` into its own module - name it `'static'`.

2.2 `ImageFinder` should throw an error for unknown modules.

2.3. refactor or extend `Gallery.doSearch()` to use your new `ImageFinder` implementation. it should accept query and module id:

```
gallery.doSearch(query, moduleId).
```

# 3.

add a flickr search module to the system using the following API key:

```
// Flickr API key
b394136d5dde8d9d0d4f8fc6685386e2
```

3.1. (bonus) add a drop down menu in gallery to select a search module (static / flickr).

# 4.

add functionality to your `search()` so that it will be able to accept requests from multiple galleries and "know" how to return results to the right gallery.

# 5.

now that `search()` returns results asynchronously, it might cause unwanted old results to be returned before or even AFTER newer queries.

change the `search()` to cancel old searches if a newer query was passed.
