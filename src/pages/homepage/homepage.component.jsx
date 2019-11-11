import React from "react";

import "./homepage.styles.scss";
import "../../components/menu-container/menu-container.component";
import { MenuContainer } from "../../components/menu-container/menu-container.component";

export const Homepage = () => (
  <div className="homepage">
    <MenuContainer />
  </div>
);
