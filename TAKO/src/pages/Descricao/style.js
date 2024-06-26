import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const FakeSwiper = styled.View`
    height: 240px;
    background-color: #DDD;
`;

export const Pagebody = styled.View`
    background-color: #FFF;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFF;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #0077B6;
`;

export const ServiceArea = styled.View`
    margin-top: 30px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;

export const ServiceTitulo = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #0077B6;
    margin-left: 30px;
    margin-bottom: 20px;
`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;

`;

export const ServiceInfo = styled.View`
    flex: 1;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #0077B6;
`;

export const ServicePrice = styled.Text`
font-weight: bold;
    color: #0077B6;
`;

export const ServiceChosseButton = styled.TouchableOpacity`
    background-color: #0077B6;
    border-radius: 10px;
    padding: 10px 15px;
`;

export const ServiceChosseBtnText = styled.Text`
    font-weight: bold;
    font-weight: bold;
    color: #fff;
`;


