import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import AppCollection from '../AppCollection';
import Scroller from '../Scroller';
import Loader from '../Loader';
import Switcher from '../Switcher';
import './style';

const renderCollections = (
  collections,
  apps,
  categories,
) => collections.map(({ id, title }) => (
  <AppCollection
    key={id}
    title={title}
    apps={apps.filter(({ collectionId }) => collectionId === id)}
    categories={categories}
  />
));

class App extends React.PureComponent {
  static propTypes = {
    selectedDevice: Switcher.propTypes.selectedDevice,
    apps: PropTypes.array,
    categories: PropTypes.object,
    collections: PropTypes.array,
    fetchAppsForDevice: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    banners: PropTypes.array,
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

        <div className='app__top-section'>
          <Switcher
            selectedDevice={selectedDevice}
            onButtonClick={fetchAppsForDevice}
          />

          {
            Array.isArray(banners)
            &&
            <Scroller images={banners} />
          }
        </div>

        <div className='app__main-section'>
          {
            Array.isArray(collections)
            &&
            Array.isArray(apps)
            &&
            <React.Fragment>
              {/*
                Рендерим 2 (или менее) коллекции приложений,
                затем баннеры приложений,
                затем остальные коллекции
              */}

              {renderCollections(collections.slice(0, 2), apps, categories)}

              <div className='app__collections-banners'>
                <div className='app__collections-banners__header'>
                  Популярные коллекции
                </div>

                <div className='app__collections-banners__content'>
                  {
                    collections.filter(({ banner }) => typeof banner === 'string')
                      .map(({ id, banner }) => <Image key={id} src={banner} />)
                  }
                </div>
              </div>

              {renderCollections(collections.slice(2), apps, categories)}
            </React.Fragment>
          }
        </div>

        <div className='app__side-section'>
          {
            Array.isArray(apps)
            &&
            <React.Fragment>
              <AppCollection
                layout='vertical'
                title='Топ платных приложений'
                apps={
                  apps.filter(({ price }) => price > 0)
                    .sort((app1, app2) => app1.pos_curr - app2.pos_curr)
                }
                categories={categories}
                limit={9}
              />

              <AppCollection
                layout='vertical'
                title='Топ бесплатных приложений'
                apps={
                  apps.filter(({ price }) => price === 0)
                    .sort((app1, app2) => app1.pos_curr - app2.pos_curr)
                }
                categories={categories}
                limit={9}
              />
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;
