import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  ViewContainer,
  Container,
  Header,
  Name,
  ID,
  InfoContainer,
  ResumeContainer,
  DataContainer,
  DataTitle,
  DataInfo,
  MachineStatus,
  DetailsContainer,
  DetailsTitle,
  DetailsInfoContainer,
  DetailsInfo,
} from "./styles";

const MachineInfo = () => {
  const params = useParams();
  const [machine, setMachine] = useState();

  const getMachineInfo = async () => {
    const { data: machineInfo } = await axios.get(
      `https://wrk.acronex.com/api/challenge/machines/${params.id}`
    );
    setMachine(machineInfo);
  };

  useEffect(() => {
    getMachineInfo();
  }, []);

  console.log(machine);

  return (
    <Container>
      <Header>
        <Name>Pulverizadora - Demo Salta 2</Name>
        <ID>383</ID>
      </Header>
      <InfoContainer>
        <ResumeContainer>
          <DataContainer>
            <DataTitle>Empresa</DataTitle>
            <DataInfo>Prueba S.R.L.</DataInfo>
          </DataContainer>
          <DataContainer>
            <DataTitle>Clase</DataTitle>
            <DataInfo>Pulverizador Autopropulsada</DataInfo>
          </DataContainer>
          <DataContainer>
            <DataTitle>Estado</DataTitle>
            <DataInfo>
              <MachineStatus working={false} />
              En movimiento
            </DataInfo>
          </DataContainer>
          <DataContainer>
            <DataTitle>Última actualización</DataTitle>
            <DataInfo>23/11/2020 19:16:03</DataInfo>
          </DataContainer>
        </ResumeContainer>
        <DetailsContainer>
          <DetailsTitle>General</DetailsTitle>
          <DetailsInfoContainer>
            <DetailsInfo value={false}>Cosechando</DetailsInfo>
            <DetailsInfo value={true}>si</DetailsInfo>
          </DetailsInfoContainer>
          <DetailsInfoContainer>
            <DetailsInfo value={false}>Batería interna</DetailsInfo>
            <DetailsInfo value={true}>4 V</DetailsInfo>
          </DetailsInfoContainer>
          <DetailsInfoContainer>
            <DetailsInfo value={false}>Batería vehículo</DetailsInfo>
            <DetailsInfo value={true}>13 V</DetailsInfo>
          </DetailsInfoContainer>
          <DetailsInfoContainer>
            <DetailsInfo value={false}>Uso Combustible</DetailsInfo>
            <DetailsInfo value={true}>52 l/hora</DetailsInfo>
          </DetailsInfoContainer>
        </DetailsContainer>
      </InfoContainer>
    </Container>
  );
};

export default MachineInfo;
