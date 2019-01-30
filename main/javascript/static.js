window.MODULES.static = query => {
  let db = window.DATA.staticImagesDb;

  let images = db.filter(image => image.title.includes(query));

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
