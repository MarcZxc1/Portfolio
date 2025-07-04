// src/api/emailService.js
import emailjs from "@emailjs/browser";

/**
 * Sends an email via EmailJS.
 * @param {Object} formRef - React ref object pointing to the form.
 * @returns {Promise}
 */
export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    "service_7y7zi9p", // replace with your service ID
    "template_5mikfis", // replace with your template ID
    formRef.current,
    "EnrE0tH64bPKydE93" // replace with your public key
  );
};
