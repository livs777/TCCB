import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ExpandIcon from '../../assets/expand.png';
import NavPrevIcon from '../../assets/nav_prev.png';
import NavNextIcon from '../../assets/nav_next.png';
import { salvarAgendamento } from '../Api';


const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #01497C;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px; 
`;

const Fecharbtn = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

const ModalItem = styled.View`
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
`;

const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const UserAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 15px;
`;

const UserName = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
`;

const ServiceInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const ServicePrice = styled.Text`
    font-size: 16px;
    font-weight: bold;    
`;

const Finishbtn = styled.TouchableOpacity`
    background-color: #0077B6;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const Finishbtntext = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;

const DateInfo = styled.View`
    flex-direction: row;
`;

const DatePrevArea = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

const DateNextArea = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-start;
`;

const DateTituloArea = styled.View`
    width: 140px;
    justify-content: center;
    align-items: center;
`;

const DateTitulo = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #000;
`;
const DateList = styled.ScrollView``;

const DateItem = styled.TouchableOpacity`
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const DateItemSem = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const DateItemNum = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const TimeList = styled.ScrollView``;

const TimeItem = styled.TouchableOpacity`
    width: 75px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const TimeItemText = styled.Text`
    font-size: 16px;
`;


const mes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

const dias = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
];

export default ({ show, setShow, user, service }) => {
    const navigation = useNavigation();

    const [selectedAno, setSelectedAno] = useState(0);
    const [selectedMes, setSelectedMes] = useState(0);
    const [selectedDia, setSelectedDia] = useState(0);
    const [selectedHora, setSelectedHora] = useState(null);
    const [listaDias, setListaDias] = useState([]);
    const [listaHoras, setListaHoras] = useState([]);

    useEffect(()=> { 
        console.log("Disponibilidade: ", user.disponibilidade);
        if (user.disponibilidade) {
            
            let daysInMonth = new Date(selectedAno, selectedMes+1, 0).getDate();
            let newListDays = [];

            for(let i=1;i<=daysInMonth;i++){
                let d = new Date(selectedAno, selectedMes, i);
                let ano = d.getFullYear();
                let mess = d.getMonth() + 1;
                let day = d.getDate();
                mess = mess < 10 ? '0' + mess : mess;
                day = day < 10 ? '0' + day : day;
                let selDate = `${ano}-${mess}-${day}`;

                let dispo = user.disponibilidade.filter(e => e.date === selDate);

                newListDays.push({
                    status: dispo.length > 0 ? true : false,
                    weekday: dias[d.getDay()],
                    number: i
                });
            }

            setListaDias(newListDays);
            setSelectedDia(0);
            setListaHoras([]);
            setSelectedHora(0);
        }
    }, [selectedMes, selectedAno, user]);

    useEffect(() => {
        if (user && user.disponibilidade && selectedDia > 0) {
          let d = new Date(selectedAno, selectedMes, selectedDia);
          let ano = d.getFullYear();
          let mess = d.getMonth() + 1;
          let day = d.getDate();
          mess = mess < 10 ? '0' + mess : mess;
          day = day < 10 ? '0' + day : day;
          let selDate = `${ano}-${mess}-${day}`;
    
          let dispo = user.disponibilidade.filter(e => e.date === selDate);
    
          if (dispo.length > 0) {
            setListaHoras(dispo[0].horas);
          }
        }

        setSelectedHora(null);
      }, [user, selectedDia]);
    
    useEffect(()=>{
        let today = new Date();
        setSelectedAno(today.getFullYear());
        setSelectedMes(today.getMonth());
        setSelectedDia(today.getDate());
    }, []);

    const handleLeftDateClick = () => {
        let mounthDate = new Date(selectedAno, selectedMes, 1);
        mounthDate.setMonth(mounthDate.getMonth() - 1);
        setSelectedAno(mounthDate.getFullYear());
        setSelectedMes(mounthDate.getMonth());
        setSelectedDia(0);
    }
    
    const handleRightDateClick = () => {
        let mounthDate = new Date(selectedAno, selectedMes, 1);
        mounthDate.setMonth(mounthDate.getMonth() + 1);
        setSelectedAno(mounthDate.getFullYear());
        setSelectedMes(mounthDate.getMonth());
        setSelectedDia(0);
    }

    const handleCloseButton = () => {
        setShow(false);
    }

    const handleFinishClick = async () => {
        if (user && service != null && selectedAno > 0 && selectedMes >= 0 && selectedDia > 0 && selectedHora != null) {
            try {
                const date = `${selectedAno}-${selectedMes + 1}-${selectedDia}`;
                await salvarAgendamento(user.id, service, date, selectedHora);
                alert("Perfeito!\nSeu serviço foi agendado com sucesso");
                setShow(false);
                navigation.navigate('Consulta'); 
            } catch (error) {
                alert("Erro ao salvar agendamento: " + error.message);
            }
        } else {
            alert("Preencha todos os dados");
        }
    };

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >
            <ModalArea>
                <ModalBody>
                    <Fecharbtn onPress={handleCloseButton}>
                        <Image source={ExpandIcon} style={{ width: 40, height: 40, tintColor: "#000" }} />
                    </Fecharbtn>

                    <ModalItem>
                        <UserInfo>
                            {user && <UserAvatar source={user.avatar} />}
                            {user && <UserName>{user.name}</UserName>}
                        </UserInfo>
                    </ModalItem>

                    {service != null && user && user.services &&
                        <ModalItem>
                            <ServiceInfo>
                                <ServiceName>{user.services[service].nome}</ServiceName>
                                <ServicePrice>{user.services[service].preco}</ServicePrice>
                            </ServiceInfo>
                        </ModalItem>
                    }

                    <ModalItem>
                        <DateInfo>
                            <DatePrevArea onPress={handleLeftDateClick}>
                                <Image source={NavPrevIcon} style={{ width: 35, height: 35 }} />
                            </DatePrevArea>
                            <DateTituloArea>
                                <DateTitulo>{mes[selectedMes]} {selectedAno}</DateTitulo>
                            </DateTituloArea>
                            <DateNextArea onPress={handleRightDateClick}>
                                <Image source={NavNextIcon} style={{ width: 35, height: 35 }} />
                            </DateNextArea>
                        </DateInfo>
                        <DateList horizontal showsHorizontalScrollIndicator={false}>
                            {listaDias.map((item, key) => (
                                <DateItem
                                    key={key}
                                    onPress={() => item.status ? setSelectedDia(item.number) : null}
                                    style={{
                                        opacity: item.status ? 1 : 0.5,
                                        backgroundColor: item.number === selectedDia ? '#0077B6' : '#FFF'
                                    }}
                                >
                                  <DateItemSem
                                        style={{
                                            color: item.number === selectedDia ? '#FFF' : '#000'
                                        }}
                                    >{item.weekday}</DateItemSem>
                                    <DateItemNum
                                        style={{
                                            color: item.number === selectedDia ? '#FFF' : '#000'
                                        }}
                                    >{item.number}</DateItemNum>
                                </DateItem>
                            ))}
                        </DateList>
                    </ModalItem>

                    {listaHoras.length > 0 &&
                        <ModalItem>
                            <TimeList horizontal={true} showsHorizontalScrollIndicator={false}>
                                {listaHoras.map((item, key)=>(
                                    <TimeItem
                                        key={key}
                                        onPress={()=>setSelectedHora(item)}
                                        style={{
                                            backgroundColor: item === selectedHora ? '#0077B6' : '#FFF'
                                        }}
                                    >
                                        <TimeItemText
                                            style={{
                                                color: item === selectedHora ? '#FFF' : '#000',
                                                fontWeight: item === selectedHora ? 'bold' : 'normal'
                                            }}
                                        >{item}</TimeItemText>
 
                                    </TimeItem>
                                ))}
                            </TimeList>
                        </ModalItem>
                    }   

                    <Finishbtn onPress={handleFinishClick}>
                        <Finishbtntext>Finalizar Agendamento</Finishbtntext>
                    </Finishbtn>
                </ModalBody>
            </ModalArea>
        </Modal>
    );
}
