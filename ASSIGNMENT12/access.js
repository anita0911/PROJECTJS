const fs=require('fs');
fs.access('./sample1.txt',fs.constants.O_RDWR, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File accessable');
})