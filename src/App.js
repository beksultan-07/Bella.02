import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Delivery from "./pages/Delivery";
import ErrorPage from "./pages/ErrorPage";
import Favorites from "./pages/Favorites";
import News from "./pages/News";
import NewsInfo from "./pages/NewsInfo";
import ProductInfo from "./pages/ProductInfo";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/collection" component={Collection} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/news" component={News} />
        <Route path="/newsInfo" component={NewsInfo} />
        <Route path="/productInfo" component={ProductInfo} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
