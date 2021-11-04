import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';
import api from '../../services/api';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import {
    Container,
    Header,
    Title,
    Content,
    ButtonView,
} from './styles';

interface ProjectProps {
    idprojeto: string;
    ds_titulo: string;
    ds_descricao: string;
}

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

export function ProjectDetails() {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    
    const navigation: any = useNavigation();
    
    const route = useRoute();

    const  { project }  = route.params as Params;

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: project,
    });

    function alerta() {
        Alert.alert(`Você deseja deletar?`,
        "",
        [
          {text: 'Cancelar', },
          {text: 'Deletar', onPress: () => handleDelete()},
        ],
          {cancelable: false}
        )}

    async function handleDelete(){
        await api.delete(`/projects/${project.id}`).then(() => {navigation.navigate("Dashboard")});
    }

    useEffect(() => {
        async function fetchProjects(){
            try {
                const response = await api.get(`/projects?idprojeto=${project.idprojeto}`);
                setProjects(response.data)
            } catch (error) {
                 console.log(error)
            }
        }
        fetchProjects();
    },[])

    async function handleRegister(form: FormData) {
        try {
            await api.put(`/projects/${project.id}`,{
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
                    <ButtonView>
                        <Button title="Salvar"  onPress={handleSubmit(handleRegister)}></Button>
                        <Button title="Apagar"  onPress={alerta}></Button>
                    </ButtonView>
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
    )
}