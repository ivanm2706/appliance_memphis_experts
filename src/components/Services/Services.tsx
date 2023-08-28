import React from 'react';
import { services } from '../../utils/Services';
import { Card } from '../Card';

export function Services() {
  return (
    <section className="page__section">
      <div className="container">
        <h2 className="page__title">
          Memphis Appliance
          <span>services</span>
        </h2>

        <div className="cards">
          {services.map(service => (
            <Card service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
