import React from 'react';
import PropTypes from 'prop-types';
import { Image, List, Popup } from 'semantic-ui-react';
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
      <Popup
        trigger={
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
        content={title}
      />
    }

    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <List.Header className={`${BCN}__title ${BCN}__title_layout-${layout}`}>
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
        layout === 'vertical'
        &&
        showFullInfo !== true
        &&
        price > 0
        &&
        <div>{`${price} руб.`}</div>
      }

      {
        showFullInfo
        &&
        <React.Fragment>
          <a
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
            <div>Встроенные покупки</div>
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
