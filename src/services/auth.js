const EmailAddressVerificationEmail = require('./email/list/notification');
const EmailSender = require('./email');

class Auth {
  static async sendEmailAddressNotificationEmail(email, companyName, startDate, endDate) {
    if (!EmailSender.isConfigured) {
      throw new Error(
        `Email provider is not configured. Please configure it at backend/config/<environment>.json.`,
      );
    }

    const emailAddressVerificationEmail = new EmailAddressVerificationEmail(
      email,
      companyName,
      startDate,
      endDate
    );

    return new EmailSender(emailAddressVerificationEmail).send();
  }
}

module.exports = Auth;
