import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Header,
  Name,
  ID,
  InfoContainer,
  ResumeContainer,
  DataContainer,
  DataInfo,
  MachineStatus,
  DetailsContainer,
  DetailsCard,
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

  const dataKeys = [];
  for (let key in machine?.data) {
    dataKeys.push(key);
  }

  return (
    <Container>
      <Header>
        <Name>{machine?.description}</Name>
        <ID>{machine?.id}</ID>
      </Header>
      <InfoContainer>
        <ResumeContainer>
          <DataContainer>
            <DataInfo $title={true}>Empresa</DataInfo>
            <DataInfo>{machine?.company ? machine.company : "-"}</DataInfo>
          </DataContainer>
          <DataContainer>
            <DataInfo $title={true}>Clase</DataInfo>
            <DataInfo>{machine?.class ? machine.class : "-"}</DataInfo>
          </DataContainer>
          <DataContainer>
            <DataInfo $title={true}>Estado</DataInfo>
            <DataInfo>
              <MachineStatus moving={machine?.moving || false} />
              {machine?.moving ? `En movimiento` : `Sin movimiento`}
            </DataInfo>
          </DataContainer>
          <DataContainer>
            <DataInfo $title={true}>Última actualización</DataInfo>
            <DataInfo>
              {machine?.last_update ? machine.last_update : "-"}
            </DataInfo>
          </DataContainer>
        </ResumeContainer>
        <DetailsContainer>
          {dataKeys.map((key) => {
            return (
              <DetailsCard key={key}>
                <DetailsTitle>{key}</DetailsTitle>
                {Object.entries(machine?.data[key]).map(([clave, valor]) => {
                  return (
                    <React.Fragment key={clave}>
                      <DetailsInfoContainer>
                        <DetailsInfo $value={true}>{clave}</DetailsInfo>
                        <DetailsInfo>{valor}</DetailsInfo>
                      </DetailsInfoContainer>
                    </React.Fragment>
                  );
                })}
              </DetailsCard>
            );
          })}
        </DetailsContainer>
      </InfoContainer>
    </Container>
  );
};

export default MachineInfo;
