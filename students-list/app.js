for (i in students) {
    var newLi = document.createElement("li"); //variable pour créer des élements li 
    var items = document.getElementById('items');
    var a = Object.entries(students[i]);
    var test = document.createTextNode(a);
    newLi.appendChild(test);
    document.getElementById("items").appendChild(newLi);

}
// console.log('students', students);