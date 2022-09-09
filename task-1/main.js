const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input.split(",");
    let min = parseInt(input[0]);
    for (let i = 0; i < input.length; i++) {
        const element = parseInt(input[i]);
        if(element<min) {
            min=element;


        }
    }

  console.log(min)
});
