const request = require('axios');
const {productIsAvailable} = require('./helpers');
const twilioSid = process.env.twilioSid;	
const twilioAuthToken = process.env.twilioAuthToken;
const twilio = require('twilio')(twilioSid, twilioAuthToken);

module.exports.productIsAvailable = (event, context, callback) => {
  request('https://www.bigduckcanvas.com/waxed-canvas-fabric-army-duck-nutmeg-brown/')
  .then(({data}) => {
    const available = productIsAvailable(data);
    if (available) {
      twilio.messages.create({
        body: 'WeEeEeEeEe...Yer fabric is back in stock! Order away!',
        from: process.env.twilioPhone,
        to: process.env.myPhone
      }).then(message => console.log(`Message sent. SID: ${message.sid}`));
    } else {
      console.log('Fabric is out of stock :(')
    }
    callback(null, {  available });
  })
  .catch(callback);
};
