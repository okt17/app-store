import React from 'react';
import PropTypes from 'prop-types';
import { List, Modal } from 'semantic-ui-react';
import AppItem from './AppItem';
import './style';

const BCN = 'app__app-collection'; // Base Class Name

class AppCollection extends React.PureComponent {
  static propTypes = {
    apps: PropTypes.array.isRequired,
    limit: PropTypes.number,
    title: PropTypes.string,
    categories: PropTypes.object,
  };
  static defaultProps = {
    limit: 10,
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
      },
      state: {
        isModalOpen,
      },
    } = this;

    return (
      <div className={BCN}>
        <div className={`${BCN}__header`}>
          <span>{title}</span>
          <span
            className={`${BCN}__header__view-all`}
            onClick={this.openModal}
          >
            См. все
          </span>
        </div>

        <List horizontal>
          {
            apps.slice(0, limit)
              .map(app => (
                <List.Item key={app.id}>
                  <AppItem
                    app={app}
                    category={
                      categories !== undefined
                      &&
                      categories[app.categoryId] !== undefined
                        ? categories[app.categoryId].title
                        : undefined
                    }
                  />
                </List.Item>
              ))
          }
        </List>

        <Modal
          open={isModalOpen}
          onClose={this.closeModal}
        >
          {
            // evaluating modal content only if modal is open
            isModalOpen
            &&
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
        </Modal>
      </div>
    );
  }
}

export default AppCollection;
