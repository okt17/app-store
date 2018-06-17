import React from 'react';
import PropTypes from 'prop-types';
import { Loader as SemanticLoader } from 'semantic-ui-react';
import './style';

// React.SFC
const Loader = ({ message }) => (
  <div className='app__loader-container'>
    <SemanticLoader
      className='app__loader-container__loader'
      active
      inline='centered'
      size='small'
    />
    {message}
  </div>
);

Loader.defaultProps = {
  message: 'Loading...',
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
