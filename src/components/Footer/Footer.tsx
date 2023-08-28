/* eslint-disable no-console */
// import { emailjs } from '@emailjs/browser';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Logo } from '../Logo/Logo';
import Tel from '../Tel/Tel';
import { Email } from '../Email';

export function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlerInputPhone = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(value);
  };

  const handlerInputName = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      phone,
    };

    emailjs.send(
      'service_bno6lq8',
      'template_n5yq677',
      data,
      'q_x__o2rJsUO-X2Un',
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });

    setName('');
    setPhone('');
  };

  return (
    <footer className="page__footer">
      <div className="container">
        <div className="footer">
          <Logo isFooter />
          <div className="contacts">
            <ul className="contacts__contacts-list">
              <li className="contacts__contacts-item">
                <Tel classes="miniContact miniContact--phone" />
              </li>

              <li className="contacts__contacts-item">
                <Email classes="miniContact miniContact--mail" />
              </li>

              <li className="contacts__contacts-item">
                <p
                  className="miniContact miniContact--shedule"
                >
                  Mon - fri: 09:00-19:00
                  <br />
                  Sat.: 10:00-16:00
                  <br />
                  Sun.: free.
                </p>
              </li>
            </ul>
          </div>

          <form className="form" onSubmit={handlerSubmit}>
            <h3 className="form__title">Fast Contact</h3>

            <input
              required
              value={name}
              onChange={handlerInputName}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <input
              required
              value={phone}
              onChange={handlerInputPhone}
              type="number"
              name="tel"
              placeholder="Phome number*"
            />

            <button
              type="submit"
              className="button button--book button--long"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
