const datacontroller = require('./controller/data-controller');

module.exports = (app) => {
	app.get('/api/v1/send', datacontroller.send);
};