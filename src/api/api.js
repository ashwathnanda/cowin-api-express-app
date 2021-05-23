import unirest from 'unirest'
import config from '../../config.json'

/**
 * Call Cowin API and get available slots for given pincode and date
  @param pincode
  @param date
  @return Array of obejcts containing slot details 
 */
export function getVaccineDataByPincode(pincode, date) {

  const baseUrl = config.cowinBaseUrl;
  const findByPin = config.cowinAPIList.findByPin;

  return new Promise((resolve, reject) => {
    unirest
    .get(baseUrl+findByPin)
    .query({
      "pincode": pincode,
      "date": date
    })
    .end(function (response) {
      if(response.error){
        return reject(response)
      }
      return resolve(response.body.sessions)
    });
  });
}

//Testing async await. Ignore
export const getVaccineData = async () => {
  console.log('Get data')
   const request = unirest
    .get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin')
    .query({
      "pincode": "110005",
      "date": "31-05-2021"
    });

    await request.end( (response) => {
      return response.body.sessions;
    })
}