import React, { useEffect, useState } from "react";
import axios from "axios";
import {
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

  return (
    <>
      {machines.slice(0, 5).map((machine, index) => {
        return (
          <MachineItemContainer key={machine.id} isFirst={!index}>
            <StyledLink to={`/machines/${machine.id}`}>
              <MachineID>({machine.id})</MachineID>
              <MachineName>{machine.description}</MachineName>
              <MachineStatus working={machine.working}></MachineStatus>
            </StyledLink>
          </MachineItemContainer>
        );
      })}
    </>
  );
};

export default MachineList;
