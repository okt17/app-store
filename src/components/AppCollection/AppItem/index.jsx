import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style';

const BCN = 'app__app-collection__app-item'; // Base Class Name

const AppItem = ({
  app: {
    title,
    icon,
    link,
    price,
    purchases,
  },
  category,
  showFullInfo,
}) => (
  <div className={BCN}>
    <Image src={icon} />

    <div className={`${BCN}__title`}>
      {title}
    </div>

    {
      typeof category === 'string'
      &&
      <div className={`${BCN}__category`}>
        {category}
      </div>
    }

    {
      showFullInfo !== true
      &&
      price > 0
      &&
      <div className={`${BCN}__price`}>
        {`${price} руб.`}
      </div>
    }

    {
      showFullInfo
      &&
      <React.Fragment>
        <a
          className={`${BCN}__link`}
          href={link}
          title='Перейти к приложению'
          target='_blank'
          rel='noopener noreferrer'
        >
          {
            price > 0
              ? `${price} руб.`
              : 'Загрузить'
          }
        </a>

        {
          purchases
          &&
          <div className={`${BCN}__purchases`}>
            Встроенные покупки
          </div>
        }
      </React.Fragment>
    }
  </div>
);

AppItem.propTypes = {
  app: PropTypes.object.isRequired,
  category: PropTypes.string,
  showFullInfo: PropTypes.bool,
};

export default AppItem;
