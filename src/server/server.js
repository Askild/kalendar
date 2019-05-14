const express = require('express');

const app = express();
app.use(express.json());

const initialEvents = require('../events').events;

let events = [...initialEvents];

app.get('*', function (req, res) {
    console.log(new Date(), req.url);
    console.log(req.body);
    // events.pop();
    const payload = events;
    return res.send(payload);
});

app.post('*', function (req, res) {
    console.log(new Date(), req.url);
    console.log(req.body);
    // events.pop();
    events = [...req.body];
    return res.send({});
});

const port = 5000;
app.listen(port);

console.log(`Listening on ${port}...`);
