import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';

import {
    Container,
    Header,
    Title,
    Content,
    TextInput,
    TextInputDesc,
} from './styles';


export function NewProject() {


    return (
        <Container>
            <Header>
            <Title>Novo Projeto</Title>
            <Button title="Salvar"  onPress={() => {}}></Button>
        </Header>
        <Content>
            <Title>Código</Title>
            <TextInput placeholder="Digite o Código do Projeto"/>

            <Title>Título</Title>
            <TextInput placeholder="Digite o Nome do Projeto"/>

            <Title>Descrição</Title>
            <TextInputDesc placeholder="Faça uma breve descrição do Projeto"/>
        </Content>
        </Container>
    );
}