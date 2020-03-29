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
let previousSlot = 0;

function GetStatus() {
  axios
    .post(bbURL, body, { headers: headers })
    .then(res => {
      const slot = res.data.response.selected_address.slot;
      if (slot.includes('All Slots Full')) {
        console.log(slot);
      } else {
        if (previousSlot === slot) {
          console.log(`Same Slot: ${slot}`);
        } else {
          console.log(`slot: ${slot}.`);
          TwilioClient.messages
            .create({
              body: slot,
              to: ToNumber,
              from: FromNumber
            })
            .then(res => {
              previousSlot = slot;
              console.log(res.sid);
            })
            .catch(e => {
              console.log(`Twilio Error`);
              console.log(e);
            });
        }
      }
    })
    .catch(e => {
      console.error(e);
    });
}
setInterval(GetStatus, interval);
// GetStatus();
