let catData = "https://api.thecatapi.com/v1/images/search";


async function getNewCat() {
    let cat;
    try {
        let data = await fetch("https://api.thecatapi.com/v1/images/search", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        cat = await data.json();
    } catch (e) {
        console.log(e);
    }
    return cat;
}
async function displayCat() {
    let cat = await getNewCat();
    // console.log(cats);
    let newCat = document.querySelector(".cat-data");
    newCat.innerHTML = ``;
    cat.forEach((item) => {
        newCat.innerHTML += `
    <div class="cat-container">
    <img src=${item.url} alt="${item.id}";
    <div class="details">
    <h4>height : ${item.height}</h4>
    <h4>width : ${item.width}</h4>
    <button class="btn btn-primary" onclick="displayCat()">Get New Cat</button>
    </div>
    </div>
    `;
    })
}
displayCat();

async function addCat() {
    let catUrl = `${catData.url}`;
    let data = await fetch("https://61bb7392e943920017784ebe.mockapi.io/cats", {
        method: 'POST',
        body: JSON.stringify({
            url: catUrl
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    displayCat();

}
addCat();