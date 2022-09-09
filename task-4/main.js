const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let n = result.input
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == "." || n[i] == "!") {
            count++
        }

    }
    console.log(count);
});
