import React from 'react';
import Count from './count';
import { useLanguage } from "../components/context/LanguageContext";

const CountArea = () => {
    const { locale } = useLanguage();
    const { items } = locale.countArea;

    return (
      <>
        {items.map((item, i) => (
          <div
            key={i}
            className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br"
          >
            <div
              className={`tp-fun-fact-item tp-fun-fact-space-${i+1} d-flex align-items-center`}
            >
              <h4>
                <span
                  data-purecounter-duration="1"
                  data-purecounter-end="300"
                  className="purecounter"
                >
                  <Count number={item.count} text={item.simble} />
                </span>
              </h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
};

export default CountArea;