const datacontroller = {};

datacontroller.data = (req, resp) => {
  resp.send({
    msg: "ok"
  });
};

module.exports = datacontroller;
