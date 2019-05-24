import { info } from '../services/atmServices';

const express = require('express');
const app = express();


app.use(express.static('dist'));

app.get('/api/info', info);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
