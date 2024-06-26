import React, { useEffect, useState } from "react";
import { Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import BackIcon from '../../../assets/back.png';
import Modal from '../../componentes/Modal';
import {
    Container,
    Scroller,
    FakeSwiper,
    Pagebody,
    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    ServiceArea,
    SwipeItem,
    SwipeImage,
    BackButton,
    ServiceTitulo,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChosseButton,
    ServiceChosseBtnText
} from './style';

export default function Descricao() {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        console.log("Params:", route.params);
      
    }, []);

    const { name, avatar, photos, services, disponibilidade } = route.params;

    const handleBackButton = () => {
        navigation.goBack();
    }
    
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleServiceChoose = (key) => {
        setSelectedService(key);
        setShowModal(true);
    }

    return (
        <Container>
            <Scroller>
                {photos && photos.length > 0 ? (
                    <Swiper style={{ height: 240 }}>
                        {photos.map((item, index) => (
                            <SwipeItem key={index}>
                                <SwipeImage source={item} resizeMode="cover" />
                            </SwipeItem>
                        ))}
                    </Swiper>
                ) : (
                    <FakeSwiper />
                )}

                <Pagebody>
                    <UserInfoArea>
                        {avatar && <UserAvatar source={avatar} />}
                        <UserInfo>
                            <UserInfoName>{name}</UserInfoName>
                        </UserInfo>
                    </UserInfoArea>

                    <ServiceArea>
                        <ServiceTitulo>Lista de Serviços</ServiceTitulo>
                        {services.map((service, index) => (
                            <ServiceItem key={index}>
                                <ServiceInfo>
                                    <ServiceName>{service.nome}</ServiceName>
                                    <ServicePrice>{service.preco}</ServicePrice>
                                </ServiceInfo>

                                <ServiceChosseButton onPress={() => handleServiceChoose(index)}>
                                    <ServiceChosseBtnText>Agendar</ServiceChosseBtnText>
                                </ServiceChosseButton>
                            </ServiceItem>
                        ))}
                    </ServiceArea>
                </Pagebody>
            </Scroller>

            <BackButton onPress={handleBackButton}>
                <Image source={BackIcon} style={{ width: 44, height: 44, tintColor: "#fff" }} />
            </BackButton>

            <Modal
                show={showModal}
                setShow={setShowModal}
                user={{ avatar, name, services, disponibilidade }}
                service={selectedService}
            />
        </Container>
    );
}
