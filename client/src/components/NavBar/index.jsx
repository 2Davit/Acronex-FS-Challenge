import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LogoContainer,
  LogoIcon,
  LogoUnimap,
  SearchInputContainer,
  SearchInput,
  SearchBtn,
  UserIcon,
} from "./styles";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/machines?search=${search}`);
  };

  return (
    <Container>
      <LogoContainer
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoIcon />
        <LogoUnimap />
      </LogoContainer>
      <SearchInputContainer onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Buscar máquina"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <SearchBtn type="submit" name="search_btn"></SearchBtn>
      </SearchInputContainer>
      <UserIcon>NN</UserIcon>
    </Container>
  );
};

export default NavBar;
