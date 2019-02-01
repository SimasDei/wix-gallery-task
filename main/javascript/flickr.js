window.MODULES.flickr = async query => {
  // Use Async call
  try {
    const flickrApi = {
      api_key: 'b394136d5dde8d9d0d4f8fc6685386e2'
    };

    // Use flick APi photos.search method
    // Params: Text && format

    const imageData = await window.fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        flickrApi.api_key
      }&text=${query}&format=json&nojsoncallback=1
      `
    );

    // Avoid Cors errors, reformat data
    const data = await imageData.json();
    // Extract photos object
    const pictureData = data.photos.photo;
    console.log(extractedImages);

    // Now with picture data, use flickr farm to request the image

    return;
  } catch (error) {
    throw error;
  }
};
