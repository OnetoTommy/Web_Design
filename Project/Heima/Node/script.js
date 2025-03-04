const fs = require('fs')
    // fs.readFile('./demo.js', 'utf8', function(err, dataStr) {
    //     if (err) {
    //         return console.log("Failure");

//     }
//     console.log('Data is' + dataStr);
// })


// fs.writeFile('./demo.js', 'Hello Node.js', function(err_1) {
//     if (err_1) {
//         return console.log(err_1.message);
//     }
//     console.log("Successful");


// })
fs.readFile('./OK.text', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log("Failure");
    }
    // console.log(dataStr);
    const arrOld = dataStr.split(' ')
    console.log(arrOld);

    const arrNew = []

    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))
    })
    console.log(arrNew);

    const newStr = arrNew.join('\r\n')
    console.log(newStr);
    // fs.writeFile('./Update_OK.text', newStr, function(err_1) {
    //     if (err_1) {
    //         return console.log('Failure');

    //     }
    //     console.log('successful');

    // })

})