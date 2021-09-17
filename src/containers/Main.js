import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import About from '../components/About';
import MetalsList from './MetalsList';
import NewMetal from './AddProduct';
import ShoppingCart from './ShoppingCart';

const Gallery = () => {
  return (
    <div>
      <h1>This is gallery page</h1>
    </div>
  );
};

const Main = () => {
  // const [metals, setMetals] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/metals')
  //     .then((response) => setMetals(response.data));
  // }, []);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <MetalsList />
          {/* <MetalsList metals={metals} /> */}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/add">
          <NewMetal />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
