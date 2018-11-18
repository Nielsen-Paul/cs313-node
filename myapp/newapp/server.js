const express = require('express');
var parser = require('body-parser');
const path = require('path');
const rateCalc = require('./calculateRate');
const PORT = process.env.PORT || 8080;

express()
    .use(parser.urlencoded({ extended: false }))
    .use(parser.json())
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/calculateRate'))
    .get('/calculateRate', (req, res) => res.render('pages/calculateRate', {
        type: null,
        weight: null,
        rate: null
    }))
    .post('/calculateRate', (req, res) => {
        let type = req.body.type;
        let weight = req.body.weight;
        let rate = rateCalc(type, weight);
        res.render('pages/calculateRate', {
            type: type,
            weight : weight,
            rate: rate
            });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));