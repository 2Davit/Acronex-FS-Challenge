import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  top: 5em;
`;

export const MachineItemContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--secondary-bg-color);
  ${(props) => (props.isFirst ? "border-top-left-radius: 5px;" : "")}
  border-top-right-radius: 5px;
  border-top: 2px solid var(--primary-bg-color);
  border-right: 2px solid var(--primary-bg-color);
  ${(props) => (props.isFirst ? "" : "transform: translateY(-5px);")}
  &:hover {
    background-color: lightgray;
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

export const PaginateContainer = styled.div`
  width: 100%;
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangePageBtn = styled.button`
  height: 2.5em;
  width: 10em;
  margin: 0em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;

  font-weight: 500;
  color: var(--primary-text-color);

  ${(props) =>
    props.disabled
      ? "background-color: var(lightgray)"
      : `cursor: pointer;background-color: var(--secondary-bg-color);  &:hover {
    background-color: lightgray;
  };`}
`;
