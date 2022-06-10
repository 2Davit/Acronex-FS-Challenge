import styled from "styled-components";
import searchIcon from "../../assets/search_icon.svg";
import logoIcon from "../../assets/logo35x35.png";
import logoUnimap from "../../assets/unimap_blanco.svg";

export const Container = styled.div`
  height: 50px;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav-bg-color);
`;

export const LogoContainer = styled.div`
  left: 35px;
  height: 50px;
  width: 150px;
  position: absolute;
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.div`
  height: 35px;
  width: 35px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
`;

export const LogoUnimap = styled.div`
  height: 40px;
  width: 135px;
  background-image: url(${logoUnimap});
  background-repeat: no-repeat;
  background-position: center;
`;

export const SearchInputContainer = styled.form`
  height: 30px;
  width: 50%;
  padding: 2px 6px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg-color);
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
  height: 100%;
  width: 4%;
  position: absolute;
  right: 0;
  background: transparent url(${searchIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const UserIcon = styled.button`
  right: 35px;
  height: 35px;
  width: 35px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg-color);
  border-radius: 999px;
  border: none;
  color: var(--primary-text-color);
  cursor: pointer;
`;
