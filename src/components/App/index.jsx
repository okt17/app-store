import React from 'react';
import PropTypes from 'prop-types';
import AppCollection from '../AppCollection';
import Loader from '../Loader';
import Switcher from '../Switcher';
import './style';

class App extends React.PureComponent {
  static propTypes = {
    selectedDevice: Switcher.propTypes.selectedDevice,
    apps: PropTypes.array,
    categories: PropTypes.object,
    collections: PropTypes.array,
    fetchAppsForDevice: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  };
  componentDidMount() {
    this.props.fetchAppsForDevice(this.props.selectedDevice);
  }
  render() {
    const {
      selectedDevice,
      fetchAppsForDevice,
      isLoading,
      apps,
      categories,
      collections,
    } = this.props;

    return (
      <div className='app'>
        {
          isLoading
          &&
          <Loader />
        }
        <div className='app__top-content'>
          <Switcher
            selectedDevice={selectedDevice}
            onButtonClick={fetchAppsForDevice}
          />

          <div>BANNERS</div>
        </div>

        <div className='app__main-content'>
          {
            Array.isArray(collections)
            &&
            Array.isArray(apps)
            &&
            collections.map(({ id, title }) => (
              <AppCollection
                key={id}
                title={title}
                apps={apps.filter(({ collectionId }) => collectionId === id)}
                categories={categories}
              />
            ))
          }
        </div>

        <div className='app__side-content'>
          SIDE CONTENT
        </div>
      </div>
    );
  }
}

export default App;
