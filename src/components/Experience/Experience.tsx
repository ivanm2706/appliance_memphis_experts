/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Experience() {
  return (
    <section className="page__section page__section--gray">
      <div className="container">
        <div className="experience">
          <div className="experience__img">
            <img
              srcSet="./images/pngwing.com_.png 1024w, ./images/pngwing.com_-300x241.png 300w, ./images/pngwing.com_-768x616.png 768w"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
              src="./images/pngwing.com_-768x616.png"
              alt="Adaptive"
            />
          </div>
          <div className="experience__content">
            <h3 className="experience__title">
              We Make It Easy
              <span>for You</span>
            </h3>

            <div className="experience__subtitles">
              <p className="experience__subtitle">Atlanta Appliance Services is known for quality services, exceptional efficiency, and the highest level of professionalism. We exceed your expectations and ensure complete satisfaction for your appliance repair services in Loganville, GA and the surrounding areas.</p>

              <p className="experience__subtitle">We are a personal repair service that focuses on the needs of the individual family. When you need your appliance fixed or installed with expertise you can trust, contact us.</p>
            </div>

            <NavLink
              to="/contact#book"
              className="button button--book-light"
            >
              Book online
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
