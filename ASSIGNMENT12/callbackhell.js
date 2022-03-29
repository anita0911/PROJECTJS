const fs = require('fs');

fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
    const dataToBeAppended = ' I am doing fantastic ';
    fs.appendFile('sample.txt', dataToBeAppended, (errA) => {
        if(errA) {
            console.error(errA);
            return;
        }
        fs.readFile('./sample.txt', 'utf8', (errR, dataR) => {
            if(errR) {
                console.error(err);
                return;
            }
            console.log(dataR);
        })
    })
})
