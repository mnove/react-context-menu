import React from "react";

import styled from "styled-components";

const MenuContainer = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};
  flex-direction: column;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 6px;
  height: 400px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const MenuItem = styled.div`
  align-items: center;
  margin-left: 0rem;
  margin-right: 0rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: default;

  &:hover {
    background-color: blue;
  }
`;

const MenuDivider = styled.div`
  border-bottom: 1px solid red;
`;

const Menu = ({ x, y, showMenu }) => {
  return (
    <MenuContainer x={x} y={y} showMenu={showMenu}>
      <MenuItem>
        <p>Button 1</p>
      </MenuItem>
      <MenuItem>
        {" "}
        <p>Button 2</p>
      </MenuItem>
      <MenuItem>
        {" "}
        <p>Button 3</p>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        {" "}
        <p>Button 4</p>
      </MenuItem>
      <MenuItem>
        {" "}
        <p>Button 5</p>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        {" "}
        <p>Button 6</p>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
