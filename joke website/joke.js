document.getElementById('jokeButton').addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        const jokeElement = document.getElementById('joke');
        if (data.setup) {
            jokeElement.innerHTML = `${data.setup} ... ${data.delivery}`;
        } else {
            jokeElement.innerHTML = `${data.joke}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
  });
  