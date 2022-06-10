import styled from "styled-components";

/* export const ViewContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-bg-color);
`; */

export const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: var(--secondary-bg-color);
  border-radius: 5px;
`;

export const Header = styled.div`
  height: 10%;
  width: 100%;
  padding: 1.5em 0em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--primary-bg-color);
`;

export const Name = styled.span`
  padding: 0em 1em;
  font-size: 24px;
  color: var(--primary-text-color);
`;

export const ID = styled.span`
  padding: 0px 20px;
  font-size: 24px;
  color: var(--secondary-text-color);
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ResumeContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
`;

export const DataInfo = styled.span`
  font-size: 18px;
  color: var(--primary-text-color);
  ${(props) =>
    props.$title ? "font-weight: bold;" : "padding-top: 1em;display: flex;"}
`;

export const MachineStatus = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 0.5em;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.working
      ? "var(--status-color-moving)"
      : "var(--status-color-stopped)"};
`;

export const DetailsContainer = styled.div`
  height: fit-content;
  padding-bottom: 1.5em;
  width: 62.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsCard = styled.div`
  width: 100%;
  margin: 1.5em 0em;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--primary-bg-color);
`;

export const DetailsTitle = styled.span`
  width: 100%;
  padding: 0.5em 0em;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: var(--primary-text-color);
  background-color: var(--primary-bg-color);
`;

export const DetailsInfoContainer = styled.span`
  width: 100%;
  padding: 0.5em 0em;
  display: flex;
`;

export const DetailsInfo = styled.span`
  width: 50%;
  font-size: 18px;
  color: var(--primary-text-color);
  ${(props) =>
    props.$value
      ? "text-align: right; padding-right: 5em;"
      : "text-align: left;"};
`;
