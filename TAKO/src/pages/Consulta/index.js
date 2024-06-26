import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { loadAgendamentos } from '../../Api'; // Assume loadAgendamentos 

const Container = styled.View`
  flex: 1;
  background-color: #01497C;
`;

const Card = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ServiceInfo = styled.View`
  flex-direction: column;
`;

const ServiceName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const ServiceTime = styled.Text`
  font-size: 16px;
  color: #000;
`;

const ServiceDate = styled.Text`
  font-size: 16px;
  color: #000;
`;

const EmptyState = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const Consulta = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const navigation = useNavigation();

  //useEffect(() => {
    //const fetchAgendamentos = async () => {
     // try {
       // const data = await loadAgendamentos();
       // setAgendamentos(data);
    //  } catch (error) {
    //    console.error("Erro ao carregar agendamentos:", error);
    //  }
   // };

 //   fetchAgendamentos();
 // }, []);

  const renderItem = ({ item }) => (
    <Card>
      <InfoArea>
        <Image source={{ uri: 'path/to/your/image.png' }} style={{ width: 50, height: 50 }} />
        <ServiceInfo>
          <ServiceName>{item.serviceName}</ServiceName>
          <ServicePrice>{item.servicePrice}</ServicePrice>
          <ServiceDate>{item.date}</ServiceDate>
          <ServiceTime>{item.time}</ServiceTime>
        </ServiceInfo>
      </InfoArea>
    </Card>
  );

  return (
    <Container>
      {agendamentos.length > 0 ? (
        <FlatList
          data={agendamentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <EmptyState>
          <EmptyText>Sem agendamentos</EmptyText>
        </EmptyState>
      )}
    </Container>
  );
};

export default Consulta;