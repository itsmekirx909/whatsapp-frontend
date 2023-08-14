import './App.css';
import store from './configs/components/redux/store';
import AppRouter from './configs/router/appRouter.js';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      
    <Provider store={store}>

    <AppRouter/>

    </Provider>



    </div>
  );
}

export default App;
