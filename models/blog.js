const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

let titleLengthChecker = (title) => {
	if (!title) {
		return false;
	} else {
		if (title.length < 5 || title.length > 50) {
			return false;
		} else {
			return true;
		}
	}
}

let validTitleChecker = (title) => {
	if(!title) {
		return false;
	} else {
		const re = /^[a-zA-Z0-9 .,()]+$/;
		return re.test(title);
	}
}

const titleValidators = [
	{
		validator: titleLengthChecker,
		message: 'Title must not be less than 5 or more than 50 characters'
	},
	{
		validator: validTitleChecker,
		message: 'Title must not contain special characters'
	}
]

let bodyLengthChecker = (body) => {
	if (!body) {
		return false;
	} else {
		if (body.length < 200) {
			return false;
		} else {
			return true;
		}
	}
}

const bodyValidators = [
	{
		validator: bodyLengthChecker,
		message: 'Blog post must be at least 200 characters long'
	}
]

let commentLengthChecker = (comment) => {
	if (!comment[0]) {
		return false;
	} else {
		if (comment[0] < 5 || comment[0] > 300) {
			return false;
		} else {
			return true;
		}
	}
}

commentValidators = [{
	validator: commentLengthChecker,
	message: 'Comments must not be less than 5 or more than 300 characters'
}]


const BlogSchema = new Schema({
	title: { type: String, required: true, validate: titleValidators },
	body: { type: String, required: true, validate: bodyValidators },
	createdBy: { type: String},
	createdAt: { type: String, default: Date.now() },
	likes: { type: Number, default: 0 },
	likedBy: { type: Array },
	dislikes: { type: Number, default: 0 },
	dislikedBy: { type: Array },
	comments: [{
		comment: { type: String, validate: commentValidators},
		commentator: { type: String }
	}]
})

module.exports = mongoose.model('Blog', BlogSchema);