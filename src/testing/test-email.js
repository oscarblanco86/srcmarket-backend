require('dotenv').config();
const { sendEmail } = require('./src/utils/mailer');

(async () => {
  try {
    const testRecipient = process.env.EMAIL_USER; // send to your own address
    const subject = '📬 Test Email from TARS-powered API';
    const content = `
      <h1>It worked!</h1>
      <p>This confirms that your mailer is set up properly in <code>.env</code>.</p>
      <p>Sent at: ${new Date().toLocaleString()}</p>
    `;

    const success = await sendEmail(testRecipient, subject, content);
    if (success) {
      console.log('✅ Email sent successfully.');
    } else {
      console.log('❌ Email failed to send.');
    }
  } catch (error) {
    console.error('❌ Test error:', error.message);
  }
})();
