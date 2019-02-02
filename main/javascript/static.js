window.MODULES.static = query => {
  // Set static database
  let db = window.DATA.staticImagesDb;
  // Filter the image array giving the query input
  let images = db.filter(image => image.title.includes(query));
  // Refactor to the requested format
  let filteredImages = images.map(image => {
    return {
      id: image.id,
      url: image.url,
      title: image.title
    };
  });

  console.log(filteredImages);
  return filteredImages;
};
