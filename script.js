const friend1 = {name:"jasdeep"};
const friend2 = {name:"jasmeet"};
const friend3 = {name:"singh"};

const friends = [{name:"jasdeep"},{name:"karanvir"},{name:"jaspreet"},{name:"jasmeet"}];

var stringify = JSON.stringify(friends);
var parse = JSON.parse(stringify);
console.log(stringify);
console.log(parse);
document.getElementById("grab").textContent = parse;

let html = "";

var ss = friends.forEach(function (val){
 html += val.name + '<br>';
});
document.getElementById("grab1").innerHTML = html ;

var data = json.books.forEach(function (val){
    console.log(val);
})

var url = "json.json";
const pro = document.querySelector('#pro');

let xml = new XMLHttpRequest();
xml.open('GET',url);
xml.responseType = 'json';
xml.onload = function(){
    console.log(xml.response);
}
xml.send();
console.log(xml);


fetch(url).then(function(res){
    console.log(res);
    return res.json();
}).then(function (data){
    console.log(data);
    data.books.forEach(function(val){
    pro.innerHTML +=  val.title + '<br>';
    console.log(val['number'])
    })
}).catch(function(error){
    console.log(error);
})
var output = document.querySelector(".output");
var button = document.querySelector(".button");

button.addEventListener("click", function(){

    var url = "https://randomuser.me/api/?results=10";
fetch (url).then(function(response){
return response.json()
}).then(function(data){
    data.results.forEach(function(val) {
       let div = document.createElement('div');
       div.textContent = `${val.name.title} ${val.name.first} ${val.name.last}`;
       let ima = document.createElement('img');
       ima.setAttribute('src',val.picture.thumbnail);
       ima.style.display = "block";
       div.appendChild(ima);
       output.appendChild(div);
    });
})
})

