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
            tCol.addEventListener('click', function mulValues() {
                var num1 = [];
                for (var o = 1; o <= 100; o++) {
                    if (o % this.innerHTML == 0)
                        num1.push(o);
                }
                var star = document.getElementsByTagName('td');
                for (var m = 0; m < 100; m++) {
                    for (var n = 0; n < num1.length; n++) {
                        if (star[m].innerHTML == num1[n])
                            star[m].innerHTML = " * ";
                    }
                }
            }
            );
            count++;
        }
    }
    body.appendChild(table);
    console.log(body);
}



