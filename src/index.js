const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.json({ status: 'error', message: 'Invalid data types' });
    }
    const result = num1 + num2;

    if (result > 1000000) {
        return res.json({ status: 'error', message: 'Overflow' });
    }

    res.json({ status: 'success', message: 'The sum of given two numbers', result });
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        res.json({ status: 'error', message: 'Invalid data types' })
    }
    const result = num1 - num2;
    if (result < -1000000) {
        return res.json({ status: 'error', message: 'Underflow' });
    }

    res.json({ status: 'success', message: 'The difference of given two numbers', result });
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        res.json({ status: 'error', message: 'Invalid data types' })
    }
    const result = num1 * num2;
    if (result > 1000000) {
        return res.json({ status: 'error', message: 'Overflow' });
    }

    res.json({ status: 'success', message: 'The product of given numbers', result });
});
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.json({ status: 'error', message: 'Invalid data types' });
    }

    if (num2 === 0) {
        return res.json({ status: 'error', message: 'Cannot divide by zero' });
    }
    const result=num1/num2
    if (result > 1000000) {
        return res.json({ status: 'error', message: 'Overflow' });
    }

    res.json({ status: 'success', message: "The division of given number", result });
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;