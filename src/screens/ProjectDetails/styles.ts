import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: whitesmoke;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;

    background-color: lightgray;

    padding-top: 50px;

    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 24px;
    padding-left: 20px;
    color: black;

`;

export const Content = styled.View``;

export const ButtonView = styled.View`
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-between;
`;