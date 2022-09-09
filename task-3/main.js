const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let scores = result.input
    let bad = 0;
    let good = 0
    for (let i = 0; i < scores.length; i++) {
        const element = scores[i];
        if (element == 2) {
            bad++
        } if (element == 5) {
            good++
        }


    } if (bad > good) {
        console.log("2");
    } if (good > bad) {
        console.log("5");
    } if (good == bad) {
        console.log("=")
    }

});
