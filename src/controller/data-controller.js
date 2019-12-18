const datacontroller = {};
const pubnubcontoller = require('./pubnub-data-controller')
const data = require('../data/details.json')

datacontroller.send = (req, resp) => {
  const index = 0
  pubnubcontoller.publishMessage(data[index], resp)
};

module.exports = datacontroller;
