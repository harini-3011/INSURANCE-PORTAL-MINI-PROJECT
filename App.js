import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';

import Signup from './components/signup';
import Nav from './components/nav';
import Life from './components/life';
import Lifesecond from './components/lifesecond';
import AboutUs from './components/about ';
import Contact from './components/contact';
import CreditCardForm from './components/payment';
import Health from './components/health';
import Healthsecond from './components/healthsecond';
import Comparator from './components/comparator';
import store from './components/store';
import Log from './components/login';
import Car from './components/car';
import Carsecond from './components/carsecond';
import Child from './components/child';
import Childsecond from './components/childsecond';
import Travel from './components/travel';
import Travelsecond from './components/travelsecond';
import Property from './components/property';
import Propertysecond from './components/propertysecond';
import FeedForm from './components/Feedback';

function App() {
  return (
    <Provider store={store}>
       <Router>
       <Routes>
      
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/life' element={<Life/>}/>
      <Route path='/lifesecond' element={<Lifesecond/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/payment' element={<CreditCardForm/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/healthsecond' element={<Healthsecond/>}/>
      <Route path='/comparator' element={<Comparator/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path='/carsecond' element={<Carsecond/>}/>
      <Route path='/child' element={<Child/>}/>
      <Route path='/childsecond' element={<Childsecond/>}/>
      <Route path='/travel' element={<Travel/>}/>
      <Route path='/travelsecond' element={<Travelsecond/>}/>
      <Route path='/property' element={<Property/>}/>
      <Route path='/propertysecond' element={<Propertysecond/>}/>
      <Route path='/Feedback' element={<FeedForm/>}/>

      <Route path='/' element={<Log/>}/>
     
    
     </Routes>
      </Router>
      </Provider>
  );
}

export default App