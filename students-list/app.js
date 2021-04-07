// for (i in students) {
// var liNew = document.createElement("table");  
// var items = document.getElementById('items');
// var x = (students[i]);
// var creatLi = document.createTextNode(x.id + ' ' + x.name + ' ' + x.createdAt + ' ' + x.avatar);
// liNew.appendChild(creatLi);
//     document.getElementById("items").appendChild(liNew);

// }

var table = document.getElementById("items");

function displayContent(content) {
    content.forEach(function (data) {

        table.innerHTML +=

            '' + data.id +
            " " + data.name +
            " " + data.createdAt +
            " " + data.avatar +
            " " + '<button type="button" class="btn btn-outline-danger btn-sm m-1">Delete</button>' +
            " " + '<button type="button" class="btn btn-outline-info btn-sm m-1">Edit</button>' +
            
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