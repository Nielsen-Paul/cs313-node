const express = require('express');
var parser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
    .use(parser.urlencoded({ extended: false }))
    .use(parser.json())
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .post('/math', (req, res) => {
        let equation = req.body.lhs + req.body.operator + req.body.rhs;

        let mathResult = eval(equation);

        res.render('pages/result', {
            result: mathResult
        })
    })
    .post('/math_service', (req, res) => {
        let equation = req.body.lhs + req.body.operator + req.body.rhs;

        let mathResult = eval(equation);

        res.json({ result: mathResult })
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));