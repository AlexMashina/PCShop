import { Route } from "react-router-dom";


import './App.css';
import { Header } from "./components";
import { Catalog, News, Cart } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Route exact path="/" component={News} />
        <Route exact path="/catalog" component={Catalog}  />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
