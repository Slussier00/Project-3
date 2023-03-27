'use strict';
function TableTemplate() {}
TableTemplate.fillIn = function(id, dict, colName) {
    var table = document.getElementById(id);
    var tbody = table.tBodies[0];
    var rowLength = tbody.rows.length;
    var colLength = tbody.rows[0].cells.length;

    var ind = -1;
    for (var r = 0; r < rowLength; r++) {
        var currentRow = tbody.rows[r];
        if(!colName) {
            for (var c = 0; c < colLength; c++) {
                var currCell = currentRow.cells[c];
                var tp1 = new TemplateProcessor(currCell.textContent);
                currCell.textContent = tp1.fillIn(dict);
            }
        } else if(r === 0) {
                for (var c1 = 0; c1< colLength; c1++) {
                    var cell = currentRow.cells[c1];
                    var tp2 = new TemplateProcessor(cell.textContent);
                    cell.textContent = tp2.fillIn(dict);
                    if(cell.textContent === colName) { ind = c1; }
                }
            } else {
                var thisCell = currentRow.cells[ind];
                var tp3 = new TemplateProcessor(thisCell.textContent);
                thisCell.textContent = tp3.fillIn(dict);
            }
    }
    table.style.visibility = "visible";
};
