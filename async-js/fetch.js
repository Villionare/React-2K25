let fetchCall = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(responce => { return responce.json() }
    ).then(data => console.log(data))
    .catch(data => console.error(`Failed ${data}`))


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        // The first .then() receives a Response object.
        // We need to parse the response body, e.g., as JSON, text, etc.
        return response.json(); // Parses the response body as JSON
    })
    .then(data => {
        // The second .then() receives the parsed data
        console.log(data);
    })
    .catch(error => {
        // Catches any network errors or errors thrown in the .then() blocks
        console.error('Error fetching data:', error);
    });