//XMLhttpResponce
//Promises 
//Fetch


//promises are used to manage the asynchronous code.

//promises has 3 states 
//- pending
//- fulfilled
//- Rejected

// Handlers in Promises -  .then() .catch() .finally()


//creating a promise
// let promise = new Promise((resolve, reject) => {
//     //write some async code to be done

//     setTimeout(() => {
//         let state = true;

//         if (state) {
//             resolve(`process compleated successfully`);
//         } else {
//             reject(`process failed successfully`);
//         }
//     }, 3000);
// });

// //consuming a promise
// promise.then((message) => {
//     console.log(`Success : ${message}`);
// }).catch((message) => {
//     console.log(`Failure : ${message}`);
// }).finally(() => {
//     console.log(`Promise compleated`);
// })

const xhr = new XMLHttpRequest();

let xhrFecthPromise = new Promise((resolve, reject) => {
    let theURL = `https://api.github.com/users/villionare`;
    xhr.open("GET", theURL, true);

    xhr.responseType = "json";

    xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const recievedData = xhr.response;

                resolve(recievedData);

            } else {

                reject(`${xhr.status} ${xhr.statusText}`);
            }
        }
    };

});

xhr.send();

xhrFecthPromise.then((fetchedData) => {
    console.log(`got the data ${fetchedData}`);
}).catch((message) => {
    console.log(`Error recieved: ${message}`);
}).finally(() => {
    console.log(`Promise compleated`);
})