import React from "react";
import {
  Container,
  LogoContainer,
  LogoIcon,
  LogoUnimap,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  UserIcon,
} from "./styles";

const NavBar = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon />
        <LogoUnimap />
      </LogoContainer>
      <SearchInputContainer>
        <SearchInput placeholder="Buscar máquina" />
        <SearchIcon></SearchIcon>
      </SearchInputContainer>
      <UserIcon>NN</UserIcon>
    </Container>
  );
};

export default NavBar;
