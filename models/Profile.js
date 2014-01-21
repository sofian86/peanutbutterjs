/**
 * Abstracts the User Profile away from the authentication accounts
 * to possibly allow for customization of profiles
 * @param  {Object} config   The Global Config object
 * @param  {Mongoose Object} mongoose The MongooseDB Object
 * @return {Module}          The Profile Model Module
 */
module.exports = function(config, mongoose) {
	var ProfileSchema = new mongoose.Schema({
		name: {											//Users Name
			first: 		{type: String},	//First Name
			last: 		{type: String}	//Last Name
		},
		siteUrl: 		{type:String},	//Personal Website
		biography: 	{type: String},	//A Biography for the user
		avatarUrl: 	{type: String}	//Url for the persons avatar image
	});
}