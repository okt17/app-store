import React from 'react';
import PropTypes from 'prop-types';
import { List, Modal } from 'semantic-ui-react';
import AppItem from './AppItem';
import './style';

const BCN = 'app__app-collection'; // Base Class Name

class AppCollection extends React.PureComponent {
  static propTypes = {
    apps: PropTypes.array.isRequired,
    limit: PropTypes.number, // max number of apps shown (modal shows all of them)
    title: PropTypes.string,
    categories: PropTypes.object,
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
  };
  static defaultProps = {
    limit: 15,
    layout: 'horizontal',
  };
  state = {
    isModalOpen: false,
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });
  render() {
    const {
      props: {
        apps,
        limit,
        title,
        categories,
        layout,
      },
      state: {
        isModalOpen,
      },
    } = this;

    if (apps.length === 0) {
      return null;
    }

    return (
      <div className={BCN}>
        <div className={`${BCN}__header`}>
          <span className={`${BCN}__header__title`}>
            {title}
          </span>

          <span
            className={`${BCN}__header__action-button`}
            onClick={this.openModal}
          >
            См. все
          </span>
        </div>

        <List
          horizontal={layout === 'horizontal'}
          nowrap='true'
        >
          {
            apps.slice(0, limit)
              .map((app, i) => (
                <AppItem
                  key={app.id}
                  app={app}
                  category={
                    categories !== undefined
                    &&
                    categories[app.categoryId] !== undefined
                      ? categories[app.categoryId].title
                      : undefined
                  }
                  showIcon={
                    layout === 'horizontal'
                    ||
                    i === 0
                  }
                  layout={
                    layout === 'horizontal'
                      ? 'vertical'
                      : 'horizontal'
                  }
                />
              ))
          }
        </List>

        <Modal
          open={isModalOpen}
          onClose={this.closeModal}
          className={`${BCN}__modal`}
        >
          {
            // evaluating modal content only if modal is open
            isModalOpen
            &&
            <div className={`${BCN}__modal__content`}>
              <div className={`${BCN}__header`}>
                <span className={`${BCN}__header__title`}>
                  {title}
                </span>

                <span
                  className={`${BCN}__header__action-button`}
                  onClick={this.closeModal}
                >
                  Подборка
                </span>
              </div>

              <List horizontal className={`${BCN}__list`}>
                {
                  apps.map(app => (
                    <AppItem
                      key={app.id}
                      app={app}
                      category={
                        categories !== undefined
                        &&
                        categories[app.categoryId] !== undefined
                          ? categories[app.categoryId].title
                          : undefined
                      }
                      showFullInfo
                    />
                  ))
                }
              </List>
            </div>
          }
        </Modal>
      </div>
    );
  }
}

export default AppCollection;
