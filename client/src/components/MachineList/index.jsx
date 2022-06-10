import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = searchParams.get("search");

  const getMachines = useCallback(async () => {
    if (search) {
      const { data: machineList } = await axios.get(
        `https://wrk.acronex.com/api/challenge/machines?q=${search}`
      );
      if (!Array.isArray(machineList)) navigate(`/machines/${machineList.id}`);
      setMachines(machineList);
    } else {
      const { data: machineList } = await axios.get(
        "https://wrk.acronex.com/api/challenge/machines"
      );
      setMachines(machineList);
    }
  }, [navigate, search]);

  useEffect(() => {
    getMachines();
  }, [getMachines, searchParams]);

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
