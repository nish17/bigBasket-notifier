const axios = require('axios');
const twilio = require('twilio');

const {
  headers,
  body,
  bbURL,
  accountSid,
  authToken,
  ToNumber,
  FromNumber
} = require('./config');

const interval = 1000 * 60 * 5; // 5 minutes

const TwilioClient = new twilio(accountSid, authToken);
let previousSlot = '', slot = '';
async function GetStatus() {
  try {
    const res = await axios.post(bbURL, body, { headers: headers });
    slot = res.data.response.selected_address.slot;
  }
  catch(err){
    console.error(err);
  }
  if (slot.includes('All Slots Full')) {
    console.log(slot);
  } else {
    if (previousSlot === slot) {
      console.log(`Same Slot: ${slot}`);
    } else {
      previousSlot = slot;
      console.log(`slot: ${slot}.`);
      try {
        const message = await TwilioClient.messages.create({ body: slot, to: ToNumber, from: FromNumber})
          console.log(message);
      } catch(err) {
        console.log(`Twilio Error`);
        console.log(e);
      }
    }
  }
}

exports.handler = async function(event, context) {
  // setInterval(GetStatus, interval);
  await GetStatus();
};
