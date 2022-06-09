import React from "react";
import {
  Container,
  MachineItemContainer,
  MachineID,
  MachineName,
  MachineStatus,
} from "./styles";

const MachineList = () => {
  return (
    <Container>
      <MachineItemContainer isFirst={TextTrackCueList}>
        <MachineID>(1500)</MachineID>
        <MachineName>Test Machine</MachineName>
        <MachineStatus working={true}></MachineStatus>
      </MachineItemContainer>
      <MachineItemContainer>
        <MachineID>(1500)</MachineID>
        <MachineName>Test Machine</MachineName>
        <MachineStatus working={true}></MachineStatus>
      </MachineItemContainer>
      <MachineItemContainer>
        <MachineID>(1500)</MachineID>
        <MachineName>Test Machine</MachineName>
        <MachineStatus working={true}></MachineStatus>
      </MachineItemContainer>
    </Container>
  );
};

export default MachineList;
