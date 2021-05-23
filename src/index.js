import express from 'express';
import { getVaccineDataByPincode } from './api/api';
const app = express();

app.get('/', function (req, res) {
  res.send('Cowin API Express APP');
});

app.get('/api/vaccines/pincode', (req, res) => {
  const pincode = req.query.pincode;
  const date = req.query.date;

  //Get vaccine data for given pincode and date
  getVaccineDataByPincode(pincode, date)
  .then((body) => res.json(body))
  .catch((error) => res.json(error));
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
