// Array of Public APIs
const publicAPIs = [
    { name: 'GitHub API', url: 'https://api.github.com' },
    { name: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/posts' },
    { name: 'OpenWeatherMap (requires API key)', url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key' },
    { name: 'CoinGecko API', url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd' },
    { name: 'NASA API', url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' },
    { name: 'Dog CEO (Random Dog Images)', url: 'https://dog.ceo/api/breeds/image/random' },
    { name: 'Cat Facts', url: 'https://catfact.ninja/fact' },
    { name: 'JokeAPI', url: 'https://v2.jokeapi.dev/joke/Any' },
    { name: 'The Breaking Bad API', url: 'https://breakingbadapi.com/api/characters' },
    { name: 'Advice Slip JSON API', url: 'https://api.adviceslip.com/advice' },
    { name: 'Bored API (Get Activity)', url: 'https://www.boredapi.com/api/activity' },
    { name: 'Random User API', url: 'https://randomuser.me/api/' },
    { name: 'Quotes API', url: 'https://api.quotable.io/random' },
    { name: 'Chucking Norris Jokes API', url: 'https://api.chucknorris.io/jokes/random' },
    { name: 'Punk API (Craft Beer Info)', url: 'https://api.punkapi.com/v2/beers' },
    { name: 'Open Library API', url: 'https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data' },
    { name: 'IP Geolocation API', url: 'https://ipapi.co/json/' },
    { name: 'Agify.io (Predict Age)', url: 'https://api.agify.io/?name=michael' },
    { name: 'Genderize.io (Predict Gender)', url: 'https://api.genderize.io?name=lucy' },
    { name: 'Universities API', url: 'http://universities.hipolabs.com/search?country=United+States' },
    { name: 'CoinPaprika API', url: 'https://api.coinpaprika.com/v1/tickers' },
    { name: 'MetaWeather API', url: 'https://www.metaweather.com/api/location/44418/' },
    { name: 'OMDb API (Movies)', url: 'http://www.omdbapi.com/?t=Inception&apikey=your_api_key' },
    { name: 'Taco Randomizer API', url: 'http://taco-randomizer.herokuapp.com/random/' },
    { name: 'Breaking Bad Quotes', url: 'https://breakingbadapi.com/api/quote/random' },
    { name: 'Harry Potter API', url: 'https://hp-api.onrender.com/api/characters' },
    { name: 'Pokemon API', url: 'https://pokeapi.co/api/v2/pokemon/ditto' },
    { name: 'Rick and Morty API', url: 'https://rickandmortyapi.com/api/character' },
    { name: 'Foodish API (Random Food Images)', url: 'https://foodish-api.herokuapp.com/api/' },
    { name: 'Dog CEO Random Dog Images', url: 'https://dog.ceo/api/breeds/image/random' },
    { name: 'Open Trivia API', url: 'https://opentdb.com/api.php?amount=10' },
    { name: 'JSONBin.io', url: 'https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e' },
    { name: 'Random Data API', url: 'https://random-data-api.com/api/users/random_user' },
    { name: 'The Cat API', url: 'https://api.thecatapi.com/v1/images/search' },
    { name: 'The Dog API', url: 'https://api.thedogapi.com/v1/images/search' },
    { name: 'Shibe Online API (Shiba Inu Pictures)', url: 'http://shibe.online/api/shibes?count=1' },
    { name: 'Ghibli API (Studio Ghibli Films)', url: 'https://ghibliapi.herokuapp.com/films' },
    { name: 'Quote Garden API', url: 'https://quote-garden.herokuapp.com/api/v3/quotes/random' },
    { name: 'WeatherAPI (Free Weather Data)', url: 'https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London' },
    { name: 'Covid-19 API', url: 'https://api.covid19api.com/summary' },
    { name: 'Breaking Bad API', url: 'https://breakingbadapi.com/api/characters' },
    { name: 'The Rick and Morty API', url: 'https://rickandmortyapi.com/api/character/' },
    { name: 'Football Data API', url: 'https://api.football-data.org/v2/competitions/CL/matches' }
  ];
  
  // Populate the API list
  const apiList = document.getElementById('apiList');
  publicAPIs.forEach(api => {
    const li = document.createElement('li');
    li.textContent = api.name;
    li.addEventListener('click', () => {
      document.getElementById('urlInput').value = api.url;
    });
    apiList.appendChild(li);
  });
  
  // Handle API check
  document.getElementById('checkBtn').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    
    if (!url) {
      resultDiv.innerHTML = 'Please enter a valid URL.';
      return;
    }
  
    fetch(url)
      .then(response => {
        const status = response.status;
        let message = '';
  
        // Handling common status codes and descriptions
        switch (status) {
          case 200: message = '200: OK - The request was successful!'; break;
          case 201: message = '201: Created - The request was successful and a resource was created!'; break;
          case 400: message = '400: Bad Request - The server could not understand the request!'; break;
          case 401: message = '401: Unauthorized - Authentication is required for this request!'; break;
          case 403: message = '403: Forbidden - You do not have permission to access this resource!'; break;
          case 404: message = '404: Not Found - The page you are looking for doesn’t exist!'; break;
          case 500: message = '500: Internal Server Error - Something went wrong on the server!'; break;
          default: message = `${status}: ${response.statusText} - Unhandled status code!`;
        }
  
        resultDiv.innerHTML = message;
      })
      .catch(error => {
        resultDiv.innerHTML = 'Error: Invalid URL, CORS policy issue, or network error!';
      });
  });
  