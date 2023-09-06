const accessKey = "9lYzmCVg8JqtGI4pOGlmAHspwc8YPWuE23D7I7FmGyo";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("Search-input");
const searchResults = document.querySelector(".search-result");
const showMore = document.getElementById("show-more");

let inputData = "";
let page = 2;

 async function searchImages () {
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;


    if (page === 1) {
        searchResults.innerHTML = "";
    };

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        image.Link.href = result.links.html;
        image.Link.target = "_blank";
        imageLink.textContent = result.alt_description;


        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });

    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }

}

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
})


