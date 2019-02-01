window.MODULES.flickr = async query => {
  // Use Async call
  try {
    const Flickr_API = {
      api_key: 'b394136d5dde8d9d0d4f8fc6685386e2'
    };

    // Use flick APi photos.search method
    // Params: Text && format

    const imageData = await window.fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        Flickr_API.api_key
      }&text=${query}&format=json&nojsoncallback=1
      `
    );

    // Avoid Cors errors, reformat data
    const data = await imageData.json();
    // Extract photos object
    const photoData = data.photos.photo;

    // Now with picture data, use flickr farm to request the image
    // Map through picture data, request the Image url for every instance
    // Use the requested object format
    // Create an empty images array to push results to
    const images = [];
    photoData.map(photo => {
      images.push({
        id: photo.id,
        // construct a URL to the image farm link
        // URL format : image ID + _ + image Secret + _s.jpg
        url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}_s.jpg`,
        title: photo.title
      });
      return images;
    });
    return images;
  } catch (error) {
    throw error;
  }
};
