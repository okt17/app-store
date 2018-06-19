import React from 'react';
import PropTypes from 'prop-types';
import { Image, List } from 'semantic-ui-react';
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
  showIcon,
  layout,
}) => (
  <List.Item className={BCN}>
    {
      showIcon
      &&
      <List.Icon className={`${BCN}__icon ${BCN}__icon_layout-${layout}`}>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image fluid src={icon} />
        </a>
      </List.Icon>
    }

    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <List.Header className={`${BCN}__title`}>
        {title}
      </List.Header>
    </a>

    <List.Content>
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
    </List.Content>
  </List.Item>
);

AppItem.propTypes = {
  app: PropTypes.object.isRequired,
  category: PropTypes.string,
  showFullInfo: PropTypes.bool,
  showIcon: PropTypes.bool,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
};

AppItem.defaultProps = {
  showIcon: true,
  layout: 'vertical',
};

export default AppItem;
