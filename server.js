const express = require('express')
var axios = require("axios")
var path = require("path")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(path.join(__dirname ,'public'))
    return res.sendFile('public/index.html' , { root : __dirname});
})


app.get('/searchword', (req, res) => {
    // res.send('Hello World! Rytham')
    console.log(req.query)


    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry: req.query.entry },
        headers: {
            'X-RapidAPI-Key': '6b8cbe43e4mshf40b4b5edf4fcd5p19949ejsneae54a009d42',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        console.log(response.data);
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });

//    let response = {}
//     response.data = {
//         entry: 'mask',
//         request: 'mask',
//         response: 'mask',
//         assoc_word: [ 'hide', 'hat', 'face' ],
//         assoc_word_ex: [ 'hide', 'hat', 'face', 'veil', 'disguise', 'camouflage' ],
//         version: '7.4.2',
       
//         email: 'help@twinword.com',
//         result_code: '200',
//         result_msg: 'Success'
//       }
   
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000`)
})