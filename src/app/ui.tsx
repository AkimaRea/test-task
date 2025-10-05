import { Provider } from 'react-redux';

import { Router, store } from './providers';

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
