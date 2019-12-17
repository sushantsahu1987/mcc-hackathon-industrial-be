const PubNub = require("pubnub");
const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
  publishKey: "pub-c-e371a2e3-cda7-4f9e-96ef-4d81fcb62a7b",
  subscribeKey: "sub-c-4f8b3346-db67-11e4-8648-02ee2ddab7fe",
  uuid: uuid
});

const publishConfig = {
  channel: "pubnub_onboarding_channel",
  message: { sender: uuid, content: "Hello From Node.js SDK" }
};

pubnub.addListener({
  message: function(message) {
    console.log(message);
  },
  presence: function(presenceEvent) {
    console.log(presenceEvent);
  }
});

pubnub.subscribe({
  channel: "pubnub_onboarding_channel",
  withPresence: true
});

module.exports.publishMessage = (message, serverresponse) => {
  const publishConfig = {
    channel: "pubnub_onboarding_channel",
    message
  };

  pubnub.publish(publishConfig, function(status, response) {
    console.log(status, response);
    serverresponse.send({status, response})
  });
};
