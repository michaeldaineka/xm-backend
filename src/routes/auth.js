const express = require('express');

const AuthService = require('../services/auth');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

router.post(
  '/sendEmail',
  wrapAsync(async (req, res) => {
    await AuthService.sendEmailAddressNotificationEmail(req.body.email, req.body.companyName, req.body.startDate, req.body.endDate);
    const payload = true;
    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
