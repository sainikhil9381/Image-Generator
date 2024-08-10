const searchForm = document.getElementById("searchform");
const searchBox = document.getElementById("searchbox");
const searchResult = document.getElementById("searchresult");
const showmoreBtn = document.getElementById("showmorebtn");
const accesskey = "qBWynYT7vPdlGZbYrIt0mIIrHGkYfKM5VqmwsRMC4wE";

let keyword = "";
let page = 1;

async function searchimages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if(page=== 1){
        searchResult.innerHTML = "";
    }
    
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;  // Corrected to result.urls.small
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";  // Corrected typo here
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    })
    showmoreBtn.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchimages();
})
showmoreBtn.addEventListener("click",()=>{
    page++;
    searchimages();
})

