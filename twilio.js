const accountSid = 'ACf071269c0be8c84beebe20447c132a3c';
const authToken = 'ad76900bddd1fa5518eeea99eccca310';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'hhdsj',
        from: '+15076269902',
        to: '+918770312556'
    })
    .then(message => console.log(message.sid))
    .done();