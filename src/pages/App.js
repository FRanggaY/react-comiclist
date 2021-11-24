// import logo from './logo.svg';
import {Routes} from '../config';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../redux/reducer/globalReducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
