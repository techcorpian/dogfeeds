var uri = "https://dog.ceo/api/breeds/list/all";

function fetchBreed() {
  fetch(uri)
    .then((response) => response.json())
    .then((result) => {
      const breeds = Object.keys(result.message);
      const feed = document.getElementById('left-menu');
      breeds.forEach((breed) => {
        const breedElement = document.createElement('div');
        breedElement.textContent = breed;
        breedElement.classList.add('breed');
        breedElement.addEventListener('click', () => fetchBreedImages(breed));
        feed.appendChild(breedElement);
      });
    })
    .catch((error) => console.log(error));
}

function fetchBreedImages(breed) {
  const breedImagesUri = `https://dog.ceo/api/breed/${breed}/images/random/3`;
  fetch(breedImagesUri)
    .then((response) => response.json())
    .then((result) => {
      const imagesContainer = document.getElementById('breed-images');
      imagesContainer.innerHTML = '';
      result.message.forEach((image) => {
        const divElement = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = image;
        divElement.appendChild(imgElement);
        imagesContainer.appendChild(divElement);
      });
    })
    .catch((error) => console.log(error));
}

fetchBreed();
  


