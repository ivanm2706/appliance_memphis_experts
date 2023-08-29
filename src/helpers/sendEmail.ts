import emailjs from '@emailjs/browser';
import { DataEmailJsType } from '../types/DataEmailJsType';

export const sendEmail = async (data: DataEmailJsType) => {
  try {
    const request = await emailjs.send(
      'service_bno6lq8',
      'template_n5yq677',
      data,
      'q_x__o2rJsUO-X2Un',
    );

    console.log(request);
    return request;
  } catch {
    throw new Error('Error sending email');
  }
};
