let inputNode = document.querySelector("input").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {




const url = "http://recipepuppyproxy.herokuapp.com/api/?i=" + event.target.value
let img = document.querySelector("#container")
let foodImg = ""


fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(json){


for (var i = 0; i < json.results.length; i++) {

foodImg += `
<div>
<img src = "${json.results[i].thumbnail}">
<li>${json.results[i].title}</li>
<li>${json.results[i].ingredients}
</div>
`
  img.innerHTML = foodImg
}
})
}
})
