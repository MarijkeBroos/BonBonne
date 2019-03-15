import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantAPI from './RestaurantAPI';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RestaurantAPI />, document.getElementById('root'));

serviceWorker.unregister();
