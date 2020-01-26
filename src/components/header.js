import React from "react";
import ToggleSwitch from "./toggleSwitch";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ toggleTheme, isChecked, title }) => {
  return (
    <Nav>
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      <ToggleSwitch
        toggleTheme={toggleTheme}
        isChecked={isChecked}
        id="mode"
        ariaLabel="dark mode toggle"
      />
    </Nav>
  );
};

export default Header;
