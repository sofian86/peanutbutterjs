 /**
  * Basic User Authentication Module
  * @param  {Object} config     The Global Configuration object
  * @param  {Mongoose Object} mongoose   The MongooseDB module
  * @param  {NodeMailer Object} nodeMailer The NodeMailer module
  * @return {Module}            User authentication module
  */
 module.exports = function(config, mongoose, nodeMailer) {

 	var crypto = require('crypto');

 	//The Schema for the Account in the Database
 	var AccountSchema = new mongoose.Schema({
 		email: 		{type: String, unique: true},
 		password: {type: String},
 		username: {type: String, unique: true}
 	});

 	var Account = mongoose.model('Account', AccountSchema);

 	//This should be a promise handler?
 	var registerCallback = function(err) {
 		if(err) {
 			return console.log(err);
 		};
 		return console.log('Account was created');
 	};

 	var changePassword = function(accountId, newpassword) {
 		var shaSum = crypto.createHash('sha256');
 		shaSum.update(newpassword);
 		var hashedPassword = shaSum.digest('hex');

 		Account.update({_id:accountId}, {$set: {password:hashedPassword}}, {upsert:false},
 		               function changePasswordCallback(err) {
 		               	console.log('Change password done for account '+accountId);
 		               });
 	};

 	var forgotPassword = function(email, resetPasswordUrl, callback) {

 		var user = Account.findOne({email: email}, function findAccount(err, doc) {
 			if(err) {
 				callback(false);
 			} else {
 				var smtpTransport = nodemailer.createTransport('SMTP', config.mail);
 				nodemailer.createTransport('SMTP', config.mail);
 				resetPasswordUrl += '?account='+doc.id;
 				smtpTransport.sendMail({
 					from: 'thisapp@example.com',
 					to: doc.email,
 					subject: 'PeanutButter Password Request',
 					text: 'Click here to reset your password: ' + resetPasswordUrl
 				}, function forgotPasswordResult(err) {
 					if (err) {
 						callback(false);
 					} else {
 						callback(true);
 					}
 				});
 			}
 		});

 	};

 	var login = function(email, password, callback) {
 		var shaSum = crypto.createHash('sha256');
 		shaSum.update(password);

 		Account.findOne({email:email, password:shaSum.digest('hex')}, function(err, doc) {
 			callback(null!=doc);
 		});
 	};

 	var register = function(email, password, firstName, lastName) {
 		var shaSum = crypto.createHash('sha256');
 		shaSum.update(password);

 		console.log('Registering '+email);

 		var user = new Account({
 			email: email,
 			name: {
 				first: firstName,
 				last: lastName
 			},
 			password: shaSum.digest('hex')
 		});

 		user.save(registerCallback);
 		console.log('Save command was sent');
 	}

 	return {
 		register: register,
 		forgotPassword: forgotPassword,
 		changePassword: changePassword,
 		login: login,
 		Account: Account
 	};

 }