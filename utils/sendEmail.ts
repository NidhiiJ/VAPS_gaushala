import { FormValues } from '@/components/ContactForm/ContactForm';

const apiEndpoint = '/api/contact';

export const sendEmail = async (data: FormValues) => {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
