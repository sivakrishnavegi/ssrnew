
import express from 'express';
import renderer from './helpers/renders/renderer';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

  res.send(renderer());
})

app.listen( 3000, () => {
    console.log('listing on port 3000');
})