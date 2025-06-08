
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('GMzIlgraqDX6xlBNU');

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Dhirendra Baduwal',
    };

    const response = await emailjs.send(
      'service_autalvd',
      'template_t8i74bs',
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
