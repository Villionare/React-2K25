//xml http request

const search = (event) => {

    event.preventDefault();
    let inputId = document.querySelector('#search-id').value;
    let theURL = `https://api.github.com/users/${inputId}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", theURL, true);
    //let responce = xhr.response;
    //this responce  return the status 0,1,2,3,4
    //console.log(responce);

    xhr.responseType = "json";

    // Event listener for when the request's state changes
    xhr.onreadystatechange = () => {
        // readyState property indicates the state of the request:
        // 0: UNSENT (open() not yet called)
        // 1: OPENED (open() has been called)
        // 2: HEADERS_RECEIVED (send() has been called, and headers and status are available)
        // 3: LOADING (Downloading; responseText holds partial data)
        // 4: DONE (The operation is complete)

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const recievedData = xhr.response; // This is now a JS object

                console.log("API Data received:", recievedData); // Log the actual data

                let cardCant = document.querySelector(".card-cant");

                let htmlData = `<div
        class="flex flex-row bg-[#0D1117] w-130 h-auto rounded-xl p-5"
      >
        <div class="flex flex-col flex-2/3 ">
          <img
            src="${recievedData.avatar_url}"
            alt=""
            class="w-45 h-45 rounded-xl"
          />
          <p class="text-[#E0E4EA] mt-1 font-bold text-3xl">
            ${recievedData.login}
            <span class="text-base text-red-400 italic">(${recievedData.bio})</span>
          </p>
        </div>
        <div class="flex flex-col flex-1/3">
          <p class="text-[#E0E4EA] mt-1 font-bold text-2xl">
            ${recievedData.name}
          </p>
          <p class="text-[#E0E4EA] mt-1  text-base">
            Followers:
            <span class="text-lg text-[#2978F8]"
              >${recievedData.followers}</span
            >
          </p>
          <p class="text-[#E0E4EA] mt-1  text-">
            Following:
            <span class="text-lg text-[#2978F8]"
              >${recievedData.following}</span
            >
          </p>
          <p class="text-[#E0E4EA] mt-1  text-">
            Public Repos:
            <span class="text-lg text-[#2978F8]"
              >${recievedData.public_repos}</span
            >
          </p>
          <p class="text-[#E0E4EA] mt-1  text-">
            Hireable?:
            <span class="text-lg text-[#2978F8]">${recievedData.hireable}</span>
          </p>
          <p class="text-[#E0E4EA] mt-1  text-">
            Email:
            <span class="text-lg text-[#2978F8]">${recievedData.email}</span>
          </p>
          <p class="text-[#E0E4EA] mt-1  text-">
            <a href="${recievedData.repos_url}">Repos Urls</a>
          </p>
        </div>
      </div>
      `;

                cardCant.innerHTML = htmlData;

            } else {
                console.log(`${xhr.status} ${xhr.statusText}`);
            }
        }
    };

    xhr.send(); //this actually intiates the fetching process.
    //console.log("Successfully fetched profile:", profile);


}
