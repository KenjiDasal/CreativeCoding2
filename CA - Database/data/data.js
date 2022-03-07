    let data = [];
    let table;

    function preload() {
        table = loadTable('data/consumption2.csv', 'csv', 'header');
    }

    function generateData() {
        for (let r = 0; r < table.getRowCount(); r++) {
            data.push(table.rows[r].obj)
        }

        for (let i = 0; i < data.length; i++) {
            data[i].first = float(data[i].first)
            data[i].second = float(data[i].second)
            data[i].third = float(data[i].third)
            data[i].fourth = float(data[i].fourth)
            data[i].fifth = float(data[i].fifth)


        }


    }