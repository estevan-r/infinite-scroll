const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArr = [];

// Unsplash API
const count = 10;
const apiKey = "DsKTalwnkB-y0dP3ASVT-614JcD_h63HSv-8vdmDPBQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Functions to set Attributes on DOM Elements
const setAttributes = function (element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// Create Elements for Links & Photos, Add to DOM
const displayPhotos = function () {
  // Loop Arr
  photosArr.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> for Photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.url.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then into container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

// Get photos from Unsplash API
const getPhotos = async function () {
  try {
    const response = await fetch(apiUrl);
    photosArr = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
};

// On Load
getPhotos();
