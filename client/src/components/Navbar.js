import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      class="navbar navbar-expand-lg"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"

      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Button
          component={Link}
          to="/"
          color="primary"
          size="large"
        >
          BANKING SYSTEM
        </Button>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Button
                component={Link}
                to="/customers"
                color="primary"
                size="large"
              >
                Customers
              </Button>
            </li>
            <li class="nav-item">
              <Button
                component={Link}
                to="/transactions"
                color="primary"
                size="large"
              >
                transactions
              </Button>
            </li>
            <li class="nav-item">
              <Button
                component={Link}
                to="/add"
                color="primary"
                size="large"
              >
                new
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}
