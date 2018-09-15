var user = require("../controllers/user.server.controller.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const express = require("express")

/*const upload = multer({
	dest: __dirname + "/uploadedImages"
});
*/
module.exports = function(app, io) {

	app.route("/signup")
		.get(user.renderSignup);

	app.route("/api/signin")
		.post(user.signin);
	
	//USER SIGNUP
	app.route("/api/signup")
		.post(user.create);

    //uploaded files user
    app.use('/user/uploaded', express.static(path.join(__dirname, './uploads')))

	app.get('/signout', user.signout(io));

};
