import styled from "styled-components";
import searchIcon from "../../assets/search_icon.svg";
import logoIcon from "../../assets/logo35x35.png";
import logoUnimap from "../../assets/unimap_blanco.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: var(--nav-bg-color);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
  height: 50px;
  width: 170px;
`;

export const LogoIcon = styled.div`
  height: 35px;
  width: 35px;
  background-image: url(${logoIcon});
  border: none;
`;

export const LogoUnimap = styled.div`
  height: 50px;
  width: 135px;
  background-image: url(${logoUnimap});
  background-repeat: no-repeat;
  background-position: center;
`;

export const SearchInputContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 55%;
  padding: 2px 6px;
  background-color: var(--tertiary-bg-color);
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.button`
  position: absolute;
  right: 0;
  background: transparent url(${searchIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 100%;
  width: 4%;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tertiary-bg-color);
  margin-right: 35px;
  height: 35px;
  width: 35px;
  border-radius: 999px;
`;
