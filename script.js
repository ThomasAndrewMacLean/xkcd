let index = 1;

let url = "http://xkcd.com/" + index + "/info.0.json"

const comic = document.getElementById("comic")

const data = fetch(url).then(x => x.json()).then(y=> {

    console.log(y)
})