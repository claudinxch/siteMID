let availableKeywords = [
    'Cimentos',
    'Pisos',
    'Tintas',
    'Canos',
    'Ferragens',
];

const logo = document.querySelector('.logo');
const fullSearchBar = document.querySelector('.row');
const searchBar = document.querySelector('#input-box')
const searchIcon = document.querySelector('.fa-solid')
const searchBox = document.querySelector('.result-box');

logo.addEventListener('click', function() {
    location.href = "../home-page/index.html";
});

fullSearchBar.addEventListener('click', function() {
    searchBox.style.display = 'flex';
    fullSearchBar.style.marginTop = '278px';
    searchBar.style.borderBottomLeftRadius = '0';
    searchBar.style.transition = 'all 0.3s ease 0s';
    searchBar.style.borderBottom = 0;
    searchIcon.style.borderBottom = 0; 
    searchIcon.style.borderBottomRightRadius = '0';
})

document.addEventListener('click', function(event) {
    if (
        event.target !== fullSearchBar && 
        event.target !== searchBar &&       
        event.target !== searchIcon &&      
        event.target !== searchBox          
    ) {
        searchBox.style.display = 'none';  
        fullSearchBar.style.marginTop = '0'; 
        searchBar.style.borderBottomLeftRadius = '25px'; 
        searchBar.style.transition = 'all 0.3s ease 0s';
        searchBar.style.borderBottom = '2px solid white';
        searchIcon.style.borderBottom = '2px solid white';
        searchIcon.style.borderBottomRightRadius = '25px';
    }
});

searchBar.onkeyup = function(){
    let result = [];
    let input = searchBar.value;
    if(input.length) {
        result = availableKeywords.filter((keyword) => { 
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
}