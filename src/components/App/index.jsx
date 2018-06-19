import React from 'react';
import PropTypes from 'prop-types';
import AppCollection from '../AppCollection';
import Scroller from '../Scroller';
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
    banners: PropTypes.object,
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
      banners,
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

          {
            banners !== undefined
            &&
            Array.isArray(banners.big)
            &&
            <Scroller images={banners.big} />
          }
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
          {
            Array.isArray(apps)
            &&
            <React.Fragment>
              <AppCollection
                layout='vertical'
                title='Топ платных приложений'
                apps={apps.filter(({ price }) => price > 0)}
                categories={categories}
              />

              <AppCollection
                layout='vertical'
                title='Топ бесплатных приложений'
                apps={apps.filter(({ price }) => price === 0)}
                categories={categories}
              />
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;
