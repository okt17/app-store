import React from 'react';
import PropTypes from 'prop-types';
import Switcher from '../Switcher';
import Loader from '../Loader';
import './style';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.onSwitcherButtonClick(this.props.selectedDevice);
  }
  render() {
    const {
      selectedDevice,
      onSwitcherButtonClick,
      isLoading,
      categories,
      apps,
    } = this.props;

    console.log(this.props);

    return (
      <div className='app'>
        <Switcher
          selectedDevice={selectedDevice}
          onButtonClick={onSwitcherButtonClick}
        />
        {
          isLoading === true
          &&
          <Loader />
        }
        <div>Apps:</div>
        {
          Array.isArray(apps)
          &&
          <div>
            {
              apps.map(app => (
                <div>
                  {`${app.id} ${app.title} ${app.devices && app.devices.join(', ')}`}
                </div>
              ))
            }
          </div>
        }

        <div>Categories:</div>
        {categories !== undefined && <div>{Object.values(categories).map(c => c.id).join(', ')}</div>}
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  selectedDevice: PropTypes.oneOf(['iPhone', 'iPad']),
  onSwitcherButtonClick: PropTypes.func.isRequired,
  categories: PropTypes.object,
  apps: PropTypes.array,
};

export default App;
