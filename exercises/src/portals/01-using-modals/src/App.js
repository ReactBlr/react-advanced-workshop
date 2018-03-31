import React from 'react';

import Header from './Header';
import Main from './Main';

const App = (props) => {
  return (
    <div>
      <Header />
      <Main />
      <div id="modal"></div>
    </div>
  );
}

export default App;
