const inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
const inputRangeFrequencies = document.querySelector('#inputRangeFrequencies');
const divPodcast = document.querySelector('#divPodcast');

window.addEventListener('load', () => {
  inputRangeFrequencies.addEventListener('input', handleRangeValueChange);
});

function handleRangeValueChange() {
  let currentFrequency = event.target.value;
  inputCurrentFrequency.value = currentFrequency;

  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {
  let foundPodcast = null;

  for (let i = 0; i < podcasts.length; i++) {
    let currentPodcast = podcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }

  if (foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p>Nenhum podcast encontrado</p>';
  }
}

function renderPodcast(podcast) {
  divPodcast.innerHTML = '';

  let img = document.createElement('img');
  img.src = './img/' + podcast.img;

  let title = document.createElement('h2');
  title.textContent = podcast.title;

  let description = document.createElement('p');
  description.textContent = podcast.description;

  divPodcast.appendChild(img);
  divPodcast.appendChild(title);
  divPodcast.appendChild(description);
}
