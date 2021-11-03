import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';

import {
    Container,
    Header,
    Title,
    Content,
} from './styles';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';

interface FormData {
    idprojeto: string;
    ds_titulo: string;
    ds_descricao: string;
}

interface Params {
    project: ProjectsDTO;
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

export function ChangeProject() {

    const navigation: any = useNavigation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const route = useRoute();

    const  { project }  = route.params as Params;
    console.log(project)
    async function handleRegister(form: FormData) {
        // const newProject = {
        //     idprojeto: form.idprojeto,
        //     ds_titulo: form.ds_titulo,
        //     ds_descricao: form.ds_descricao,
        // }
        try {
            await api.put(`/projects?idprojeto=${project.idprojeto}`, {
                idprojeto: form.idprojeto,
                ds_titulo: form.ds_titulo,
                ds_descricao: form.ds_descricao,
            }).then(() => navigation.navigate("Dashboard"))           
            reset();
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <Container>
            <Header>
            <Title>Alterar Projeto</Title>
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