// for (i in students) {
// var liNew = document.createElement("table");
// var items = document.getElementById('items');
// var x = (students[i]);
// var creatLi = document.createTextNode(x.id + ' ' + x.name + ' ' + x.createdAt + ' ' + x.avatar);
// liNew.appendChild(creatLi);
//     document.getElementById("items").appendChild(liNew);

// }

// Requete GET

var table = document.getElementById("items");

function displayContent(content) {
    content.forEach(function (data) {

        table.innerHTML +=
            '<li class="newLi col-sm-6 col-lg-3" style="list-style : none;" id="newLi_' + data.id + '">' +
            data.id +
            "<br>" + '<img class= "h-25 w-auto" src="./avatar.png" alt="">' +

            "<br>" + data.name +
            "<br>" + data.createdAt +

            "<br>" + '<button type="button" class="deleteBtn btn btn-outline-danger btn-sm m-1" id="deleted" onclick="deleteList()">Delete</button>' +
            " " + '<button type="button" class="editBtn btn btn-outline-info btn-sm m-1" id="edited">Edit</button>' +
            '</li>' +
            '<br>'
    });
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayContent(JSON.parse(this.responseText));
    }

};
xhttp.open("GET", "students.json", true);
xhttp.send();

// Delete

function deleteList() {

    document.addEventListener("click", myFunction);
    // console.log(document.querySelectorAll(".deleteBtn"));

    // document.querySelectorAll(".deleteBtn").addEventListener("click", myFunction);
    function myFunction(e) {
        e.target.parentNode.remove();
        console.log("e.target.parentNode");
        
    }
}