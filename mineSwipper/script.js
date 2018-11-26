function gen() {
    location.reload(); // reload function;
}
window.onload = function () {
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('TABLE'); // create a table
    var tBody = document.createElement('TBODY');
    var count = 1;
    table.appendChild(tBody);   // append table-body to table
    for (var i = 0; i < 10; i++) {
        var tRow = document.createElement('TR') //creates a table row by itterating 
        tBody.appendChild(tRow)//append child to body;        
        for (var j = 0; j < 10; j++) {
            var tCol = document.createElement('TD');
            tRow.appendChild(tCol);
            tCol.innerHTML = count;


            count++;
        }
    }
    body.appendChild(table);
    console.log(body);
}



