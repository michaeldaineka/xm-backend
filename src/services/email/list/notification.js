const { getNotification } = require('../../notifications/helpers');

module.exports = class EmailAddressVerificationEmail {
  constructor(to, companyName, startDate, endDate) {
    this.to = to;
    this.companyName = companyName;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get subject() {
    return getNotification(
      'emails.notification.subject',
      this.companyName,
    );
  }

  get html() {
    return getNotification(
      'emails.notification.body',
      this.startDate,
      this.endDate,
      getNotification('app.title'),
    );
  }
};
