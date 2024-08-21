const searchIcon=document.getElementById('hiddenSearch');
const searchInput=document.getElementById('searchInput');
const search=document.getElementById('search');
const searchBar=document.getElementById('searchBar')
const header=document.getElementById('header')
const main=document.getElementById('main')

searchInput.addEventListener('focus', hidee);
searchInput.addEventListener('focusout', hidee);

function hidee(event) {
    if (event.type === 'focus') {
        searchIcon.style.visibility = "visible";
       search.style.border="none"
       searchBar.style.border="1px solid blue";
    } else if (event.type === 'focusout') {
        searchIcon.style.visibility = "hidden";
        search.style.border="1px solid black";
        searchBar.style.border="none"
    }
}

const hidden=document.getElementById('under');
function openn(){
    hidden.style.display="block";
   header.style.opacity=0.3;
   main.style.opacity=0.3;
}
function closee(){
    hidden.style.display="none";
 header.style.opacity=1;
 main.style.opacity=1;
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
        var inputText = this.value;
        var baseUrl = "https://www.youtube.com/results?search_query=";
        var fullUrl = baseUrl + encodeURIComponent(inputText); 
        window.location.href = fullUrl;
    }
    });

   