import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { Navigation } from '../../types/Navigation';
import { Service } from '../../types/Service';
import { navigationList } from '../../utils/NavigationList';
import { services } from '../../utils/Services';
import { History } from '../History';
import classNames from 'classnames';

export function Header({ isHomePage }: { isHomePage: boolean }) {
  const location = useLocation();
  const { service } = useParams();

  const getObjNav = () => {
    const arr: Service[] | Navigation[] = service ? services : navigationList;
    const url = service ? service : location.pathname.substring(1);

    return arr.find(item => item.url === url);
  };

  const lastObjNav = getObjNav() || null;

  return (
    <header
      className={classNames({
        header: true,
        'header--homePage': isHomePage,
      })}
    >
      <div className="header__background-shadow" />

      <div
        className="header__content"
      >
        <div className="header__titles">
          {isHomePage ? (
            <>
              <p className="header__title">
                Professional & Highly Rated Appliance
              </p>

              <p className="header__title">
                Repair Your Family Can Count On!
              </p>
            </>
          ) : (
            <p className="header__title">
              { lastObjNav?.title }
            </p>
          )}
        </div>

        {isHomePage ? (
          <NavLink
            to="/contact#book"
            className="button button--book button--shake"
          >
            Book online
          </NavLink>
        ) : (
          <History
            service={service}
            lastObjNav={lastObjNav}
          />
        )}

      </div>
    </header>
  );
}
