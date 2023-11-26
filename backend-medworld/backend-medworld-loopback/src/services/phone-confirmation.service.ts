// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
export function verifyNumber() {
  const accountSid = 'AC6d64be76fcffd219871f2d150be4fa70';
  const authToken = '7af3eba4385aae3f89644a5976a13e19';
  const verifySid = 'VA9d5658c941041f81320b4c13c5b7af6f';
  const client = require('twilio')(accountSid, authToken);
  client.verify.v2
    .services(verifySid)
    .verifications.create({to: '+221775160095', channel: 'sms'})
    .then((verification: {status: any}) => console.log(verification.status));
}
