import React from 'react';
import { Label } from 'semantic-ui-react';

class App extends React.PureComponent {
  render() {
    return (
      <div className='app'>
        <Label
          size='massive'
        >
          Sample Text
        </Label>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
