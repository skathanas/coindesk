//npm innit
//npm i express axios
//mis raamistiku kasutame:
const express = require('express');
const axios = require('axios');
const app = express();
//päring-vastus
// var = globaalse funktsiooniga, let = funktsiooni skoobiga
app.get('/bitcoinrates', (req, res) => {
    let url ='https://api.coindesk.com/v1/bpi/currentprice/eur.json'
    let rate = '';
    let code = '';
    let disclaimer = '';


    axios.get(url)
    //meetod hakkab ootama vastust
    .then(function(response){
        rate = response.data.bpi.EUR.rate_float;
        code = response.data.bpi.EUR.code;
        disclaimer = response.data.disclaimer;
        //saadame vastuse htmli
        res.write(`<p>${rate} ${code}</p>`);
        //res.write(rate + code);
        res.write(`<p>${disclaimer}<p>`);
        //res.write(disclaimer);
        res.send();
        //console.log(response.data.bpi.EUR.rate_float);
    })
    .catch(function(error){
        console.log(error);
    });
});


app.listen(3000, ()=> {
    console.log('Server is running on port 3000.');

});