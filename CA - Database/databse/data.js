let dataCons = [];
let table;

function preload() {
    table = loadTable('solar-energy-consumption.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        dataCons.push(table.rows[r].obj)
    }

    // for (let i = 0; i < data03.length; i++) {
    //     data03[i].Value = int(data03[i].Value)
    // }
}