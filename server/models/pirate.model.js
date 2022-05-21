const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true,
			"Pirate name is required"
		]
	},
	image: {
		type: String,
		required: [
			true,
			"Pirate must have a picture"
		]
	},
	treasure: {
		type: Number,
		required: [
			true,
			"Pirate must have a number for treasure chests"
		]
	},
	catchPhrase: {
		type: String,
		required: [
			true,
			"Pirate must have a catchy phrase"
		]
	},
	position: {
		type: String,
		enum: ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey'],
		required: [
			true,
			"Pirate must be somewhere on the totem pole"
		]
	},
	pegLeg: {
		type: Boolean,
		required: [
			true,
			"Must know whether pirate has both his legs or not"
		]
	},
	eyePatch: {
		type: Boolean,
		required: [
			true,
			"Must know whether pirate has both his eyes or not"
		]
	},
	hookHand: {
		type: Boolean,
		required: [
			true,
			"Must know whether pirate has both his hands or not"
		]
	},
}, {timestamps: true });

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;