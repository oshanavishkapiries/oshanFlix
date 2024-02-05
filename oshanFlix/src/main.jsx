import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./redux/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
  <App />
</Provider>
  //</React.StrictMode>,
)

// console.log(store.getState());
// store.subscribe(() => {
//   console.log('State updated:', store.getState());
// });
