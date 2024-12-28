import './App.css';
import DnDFlow from './Components/DnDFlow';
import {Provider} from 'react-redux';
import store from './Components/utilis/store';

function App() {
  return (
    <Provider store={store}>
    {/* <div className="App"> */}
     <DnDFlow />
    {/* </div> */}
    </Provider>
  );
}

export default App;
