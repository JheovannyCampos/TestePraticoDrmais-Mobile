import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';

import {
    Container,
    Header,
    Title,
    Content,
    TextInput,
    TextInputDesc,
} from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface FormData {
    idprojeto: string;
    ds_titulo: string;
    ds_descricao: string;
}

const schema = Yup.object().shape({
    idprojeto: Yup
        .number()
        .required("O código é obrigatório")
        .positive("O código deve ser positivo")
        .typeError("Informe um valor numérico"),
    ds_titulo: Yup
        .string()
        .required("O Título é obrigatório"),
    ds_descricao: Yup
        .string()
        .required("A descrição é obrigatório"),
})

export function NewProject() {

    const navigation: any = useNavigation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleRegister(form: FormData) {
        const newProject = {
            idprojeto: form.idprojeto,
            ds_titulo: form.ds_titulo,
            ds_descricao: form.ds_descricao,
        }
        
        try {
            const data: any = await api.get("/projects");
            const currentData = data ? JSON.parse(data) : [];
            console.log(currentData);
            

            const dataFormated = [
                ...currentData,
                newProject,
            ]

            await api.post("projects",);
            
            reset();

            navigation.navigate("Dashboard");

        } catch (error) {
            console.log("Passei aq");
        }
        
    }

    return (
        <Container>
            <Header>
            <Title>Novo Projeto</Title>
            <Button title="Salvar"  onPress={handleSubmit(handleRegister)}></Button>
        </Header>
        <Content>
            <Title>Código</Title>
            <InputForm
                name = "idprojeto"
                control = {control}
                keyboardType = "numeric"
                placeholder="Digite o Código do Projeto"
                error={errors.idprojeto && errors.idprojeto.message}
            />

            <Title>Título</Title>
            <InputForm 
                name = "ds_titulo"
                control = {control}
                placeholder="Digite o Nome do Projeto"
                error={errors.ds_titulo && errors.ds_titulo.message}
            />

            <Title>Descrição</Title>
            <InputForm 
                name = "ds_descricao"
                control = {control}
                placeholder="Faça uma breve descrição do Projeto"
                error={errors.ds_descricao && errors.ds_descricao.message}
            />
        </Content>
        </Container>
    );
}