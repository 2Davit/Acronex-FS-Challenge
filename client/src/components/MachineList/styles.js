import styled from "styled-components";
import { Link } from "react-router-dom";

export const MachineItemContainer = styled.div`
  height: 80px;
  width: 50%;
  margin: auto;
  top: 5em;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--secondary-bg-color);
  ${(props) => (props.isFirst ? "border-top-left-radius: 5px;" : "")}
  border-top-right-radius: 5px;
  border-top: 2px solid var(--primary-bg-color);
  border-right: 2px solid var(--primary-bg-color);
  ${(props) => (props.isFirst ? "" : "transform: translateY(-5px);")}
  &:hover {
    background-color: lightgray;
    transition: 0.25s;
  }
`;

export const MachineID = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-size: 20px;
  color: var(--secondary-text-color);
`;

export const MachineName = styled.span`
  font-size: 20px;
  color: var(--primary-text-color);
`;

export const MachineStatus = styled.div`
  height: 35px;
  width: 35px;
  position: absolute;
  right: 0;
  margin: 0px 20px;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.working
      ? "var(--status-color-moving)"
      : "var(--status-color-stopped)"};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  text-decoration: none;
`;
