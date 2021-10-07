import Navbar from './components/Navbar';
import './scss/App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Us from './pages/Us'
import Products from './pages/Products';
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import Contact from './pages/Contact';
import Form from './pages/Form';

function App() {
  return (
    <header>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/us' exact component={Us} />
          <Route path='/products' exact component={Products} />
          <Route path='/product1' exact component={Product1} />
          <Route path='/product2' exact component={Product2} />
          <Route path='/product3' exact component={Product3} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/form' exact component={Form} />
        </Switch>
      </Router>
    </header>
    
  );
}

export default App;
