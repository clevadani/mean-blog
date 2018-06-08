const crypto = require('crypto').randomBytes(356).toString('hex');
module.exports = {
    uri:'mongodb://meanblog:meanblog1@ds247290.mlab.com:47290/meanblog004',
    secret: crypto,
    db: 'meanblog004'
}