const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let a = result.input
    let b = parseInt(a/100)
    let c = parseInt(a%10)
    if (b>c) {
        console.log(b);
    } else if (c>b) {
        console.log(c);
    } else{
        console.log("=");
    }

});
