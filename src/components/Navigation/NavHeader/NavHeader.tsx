import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Tel from '../../Tel/Tel';
import { Logo } from '../../Logo';
import NavList from '../NavList/NavList';

type Props = {
  setIsActiveMenuMobile: React.Dispatch<React.SetStateAction<boolean>>,
}

export function NavHeader({
  setIsActiveMenuMobile,
}: Props) {
  const [isBigHeaderLine, setIsBigHeaderLine] = useState(true);

  useEffect(() => {
    const handlerScroll = () => {
      const scrollingElement = document.scrollingElement || document.documentElement;
      const { scrollTop } = scrollingElement;

      if (scrollTop > 100) {
        setIsBigHeaderLine(false);
      } else {
        setIsBigHeaderLine(true);
      }
    };


    window.addEventListener('scroll', handlerScroll);

    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return (
    <div className="nav-header">
      <div
        className={classNames({
          'nav-header__nav': true,
          'nav-header__nav--large': isBigHeaderLine,
        })}
      >
        <div className="container">
          <div className="nav-header__nav-content">
            <span className="nav-header__logo-wrap" />
            <div className="nav-header__logo">
              <Logo isBig={isBigHeaderLine} />
            </div>

            <NavList isMobile={false} />

            <div className="nav-header__contacts-menu">
              <Tel classes="miniContact miniContact--phone" />

              <div className="mobileBar">
                <button
                  type="button"
                  className="button"
                  onClick={() => setIsActiveMenuMobile(true)}
                >
                  <div className="mobileBar__button">
                    <span className="mobileBar__line" />
                    <span className="mobileBar__line" />
                    <span className="mobileBar__line" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
