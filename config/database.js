const crypto = require('crypto').randomBytes(356).toString('hex');
module.exports = {
    uri:'mongodb://meanblog:meanblog1@ds247290.mlab.com:47290/meanblog004',
    // uri:'mongodb://127.0.0.1/mean-angular-2',
    secret: crypto,
    db: 'meanblog004'
}