import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef } from 'react';

type Props = {
  p: string[];
  children: ReactNode;
  contact?: ReactNode
  title?: string;
  titleSpan?: string;
  titleAfterSpan?: string;
  p2?: string;
  p3?: string;
  withoutFrames?: boolean;
};

export function ImageTextModule({
  p,
  children,
  title,
  titleSpan,
  titleAfterSpan,
  contact,
  withoutFrames,
}: Props) {
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);

  const adjustChildHeights = () => {
    if (div1Ref.current) {
      const elem1 = div1Ref.current;

      if (div2Ref.current) {
        const elem2 = div2Ref.current;

        elem2.style.height = `${elem1.offsetHeight}px`;
      }
    }
  };

  useEffect(() => {
    adjustChildHeights();
    window.addEventListener('resize', adjustChildHeights);

    return () => {
      window.removeEventListener('resize', adjustChildHeights);
    };
  }, []);


  return (
    <div className="imageTextModule">
      <div ref={div2Ref} className="imageTextModule__img">
        <span className={classNames({
          'imageTextModule__wrapper': true,
          'imageTextModule__wrapper--frame': !withoutFrames,
        })}>
          { children }
        </span>
      </div>
      <div ref={div1Ref} className="imageTextModule__content">
        {(title || titleSpan || titleAfterSpan) && (
          <h3 className="imageTextModule__title">
            {title}
            <span>{titleSpan}</span>
            {titleAfterSpan}
          </h3>
        )}
        

        <div className="imageTextModule__subtitles">
          {p.map(text => {
            const phrase = 'Memphis Appliance Services';
            const parts = text.split(phrase);

            return (
              <p className="imageTextModule__subtitle" key={text}>
                {parts.map((partText, index) => (
                  <i key={partText}>
                    {index > 0 && <strong>{phrase}</strong>} 
                    {partText}
                  </i>
                ))}            
              </p>
            );
          })}
        </div>

        {contact && (
          <div className="container container--mt-20">
            {contact}
          </div>
        )}
      </div>
    </div>
  );
}
