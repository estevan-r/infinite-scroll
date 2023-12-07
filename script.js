// Unsplash API
const count = 10;
const apiKey = "DsKTalwnkB-y0dP3ASVT-614JcD_h63HSv-8vdmDPBQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
const getPhotos = async function () {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
};

// On Load
getPhotos();
