import React, { useContext } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ListList from "./pages/listList/ListList";
import List from "./pages/List/List";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Route exact path="/login">
        {user ? Redirect('/'): <Login />}
        {/* <Login /> */}
      </Route>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          {!user && <Redirect to="/login" />}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <ProductList />
          </Route>
          <Route path="/movie/:movieId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/lists">
            <ListList />
          </Route>
          <Route path="/list/:listId">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
