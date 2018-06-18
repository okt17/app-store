import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './style';

class Switcher extends React.PureComponent {
  static propTypes = {
    selectedDevice: PropTypes.oneOf(['iPhone', 'iPad']).isRequired,
    onButtonClick: PropTypes.func.isRequired,
  };
  handleButtonClick = (event) => {
    const device = event.target.name;
    if (device !== this.props.selectedDevice) {
      this.props.onButtonClick(device);
    }
  };
  render() {
    const { selectedDevice } = this.props;

    return (
      <Button.Group className='app__switcher'>
        <Button
          primary={selectedDevice === 'iPhone'}
          onClick={this.handleButtonClick}
          name='iPhone'
        >
          iPhone
        </Button>

        <Button.Or />

        <Button
          primary={selectedDevice === 'iPad'}
          onClick={this.handleButtonClick}
          name='iPad'
        >
          iPad
        </Button>
      </Button.Group>
    );
  }
}

export default Switcher;
