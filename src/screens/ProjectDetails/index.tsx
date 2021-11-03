import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { Button } from '../../components/Button';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';
import api from '../../services/api';

import {
    Container,
    Header,
    Title,
    ButtonArea,
    Projects,
    ProjectsList,
} from './styles';

interface ProjectProps {
    idprojeto: string;
    ds_titulo: string;
    ds_descricao: string;
}

interface Params {
    project: ProjectsDTO;
}

export function ProjectDetails() {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    
    const navigation: any = useNavigation();
    const route = useRoute();

    const  { project }  = route.params as Params;
    console.log(project.id)
    function handleChangeProject(project: ProjectsDTO){
        navigation.navigate('ChangeProject', { project: project})
    }

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



    return (
        <Container>
            <Header>
                <Title>Detalhes do Projeto</Title>
                    <ButtonArea>
                        <Button title="Deletar"  onPress={() => {handleDelete()}} />
                    </ButtonArea>    
            </Header>

            <Projects>
                <Text>Toque no Card para edita-lo</Text>
            <ProjectsList
              data={projects}
              keyExtractor={item => item.idprojeto}
              renderItem={({ item }: { item: ProjectsDTO }) => 
              <ProjectCard data={item} onPress={() => handleChangeProject(item)} />}
            />
        </Projects>

        </Container>
    )
}