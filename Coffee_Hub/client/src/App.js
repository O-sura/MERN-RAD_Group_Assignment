import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reviews from "./pages/reviews/Reviews";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import Store from './pages/Store';
import CartProvider from './CartContext';
import AddReview from "./pages/addReview/AddReview";
import AddProduct from "./pages/addProduct/AddProduct";
import UpdateProduct from "./pages/addProduct/UpdateProduct";
import UpdateReview from "./pages/addReview/UpdateReview";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>

        
        <Route path="/store">{user ?
        <CartProvider>
        <Container>
          <NavbarComponent></NavbarComponent>
              <Store /> 
        </Container>
        </CartProvider>
        : <Register />}</Route>

        <Route path="/add-product">{user ? <AddProduct /> : <Register />}</Route>
        <Route path="/update/:id">{user ? <UpdateProduct /> : <Register />}</Route>
        <Route path="/reviews">{user ? <Reviews /> : <Register />}</Route>
        <Route path="/add-review">{user ? <AddReview /> : <Register />}</Route>
        <Route path="/update-product/:id">{user ? <UpdateReview /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
