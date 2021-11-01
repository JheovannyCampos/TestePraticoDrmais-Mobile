import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: whitesmoke;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;

    background-color: lightgray;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 24px;
    padding-left: 20px;
    color: black;

`;

export const TextInput = styled.TextInput`
    width: 250px;
    height: 50px;
    border: 1px solid;
    margin-left: 20px;
`;

export const Content = styled.View`
    
`;

export const TextInputDesc = styled.TextInput`
    width: 350px;
    height: 150px;
    border: 1px solid;
    margin-left: 20px;
    text-align: center;
`;