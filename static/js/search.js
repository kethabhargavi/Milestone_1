// Get query from URL if present
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q');

if(searchQuery){
    document.getElementById("search-input").value = searchQuery;
    filterResults(searchQuery);
}

// Filter function
function filterResults(query) {
    if(!query) query = document.getElementById("search-input").value.toLowerCase();
    const resultsDiv = document.getElementById("search-results");
    resultsDiv.innerHTML = "";

    const filtered = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    filtered.forEach(item=>{
        const div = document.createElement("div");
        div.className = "search-card";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.cuisine}</p>
            <a href="${item.link}">View</a>
        `;
        resultsDiv.appendChild(div);
    });

    if(filtered.length === 0) resultsDiv.innerHTML = "<p>No results found.</p>";
}
