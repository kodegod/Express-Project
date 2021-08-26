const path = require('path');

function getMessages (req,res) {
    res.sendFile(path.join(__dirname,'..','public', 'charmander.png'));
//    res.send('<ul><li>Hello Einstein!</li></ul>');
};

function postMessage(req,res) {
    console.log('Updating messages');
};

module.exports = {
    getMessages,
    postMessage,
};

// we write normal functions so that if there is an error, it tells us the name of the function where there is an error
// easy debugging