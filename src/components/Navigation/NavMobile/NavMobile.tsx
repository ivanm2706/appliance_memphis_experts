/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Email } from '../../Email';
import Tel from '../../Tel/Tel';
import NavList from '../NavList/NavList';

type Props = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavMobile({ isActive, setIsActive }: Props) {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('shaddow--open-mobile-navigation')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div
      className={classNames({
        'shaddow shaddow--mobile-navigation': true,
        'shaddow--open-mobile-navigation': isActive,
      })}
    >
      <nav
        className={classNames({
          'nav nav--mobile': true,
          'nav--mobileOpen': isActive,
        })}
      >
        <div className="nav__shadow" />
        <div className="nav__headerButton">
          <button
            type="button"
            className="button button--menuClose"
            onClick={() => setIsActive(false)}
          />
        </div>

        <NavList isMobile />

        <div className="contacts contacts--mobile">
          <ul className="contacts__contacts-list">
            <li className="contacts__contacts-item">
              <Tel classes="miniContact miniContact--phone" />
            </li>

            <li className="contacts__contacts-item">
              <Email classes="miniContact miniContact--mail" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
