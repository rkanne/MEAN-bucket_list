var path = require('path');
var users = require('./../controllers/users.js');
var dashboards = require('./../controllers/dashboards.js');
var lists = require('./../controllers/lists.js');

console.log('routes');

module.exports = function(app) {
	app.get('/', users.index);
  	app.get('/dashboard', users.user);
	app.post('/register', users.register);
	app.post('/logout', users.logout);
	app.post('/login', users.login);
	app.get('/all_users', users.all_users);
	app.post('/add_list', dashboards.add_list);
	app.get('/get_lists', dashboards.get_lists);
	app.get('/tag/:id', dashboards.tag);
	app.get('/bucket_lists/:id', lists.bucket_lists);
	app.get('/get_user/:id', lists.get_user);

	// app.get('/getmessage', walls.getmessage);
	// app.get('/getcomment', walls.getcomment);

}
