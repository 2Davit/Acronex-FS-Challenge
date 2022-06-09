import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  MachineItemContainer,
  MachineID,
  MachineName,
  MachineStatus,
  StyledLink,
} from "./styles";

const MachineList = () => {
  const [machines, setMachines] = useState([]);

  const getMachines = async () => {
    const { data: machineList } = await axios.get(
      "https://wrk.acronex.com/api/challenge/machines"
    );
    setMachines(machineList);
  };

  useEffect(() => {
    getMachines();
  }, []);

  console.log(machines);

  return (
    <Container>
      {machines.slice(0, 5).map((machine, index) => {
        return (
          <StyledLink to={`/machines/${machine.id}`}>
            <MachineItemContainer isFirst={!index} key={machine.id}>
              <MachineID>({machine.id})</MachineID>
              <MachineName>{machine.description}</MachineName>
              <MachineStatus working={machine.working}></MachineStatus>
            </MachineItemContainer>
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default MachineList;
