import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
    
    const route = useRoute();
    const { project } = route.params as Params
    console.log(project)

    useEffect(() => {
        async function fetchProjects(){
            try {
                const response = await api.get(`/projects?idprojeto=${projects}`)
                setProjects(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjects();
    })

    return (
        <Container>
            <Header>
                <Title>Detalhes do Projeto </Title>
                    <ButtonArea>
                        <Button title="Editar"  onPress={() => {}} />
                        <Button title="Deletar"  onPress={() => {}} />
                    </ButtonArea>    
            </Header>

            <Projects>
            <ProjectsList
              data={projects}
              keyExtractor={item => item.idprojeto}
              renderItem={({ item }: { item: ProjectsDTO }) => 
              <ProjectCard data={item} />}
            />
        </Projects>

        </Container>
    )
}