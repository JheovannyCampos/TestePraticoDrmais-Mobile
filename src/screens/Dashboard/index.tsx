import React from 'react';

import { Button } from "../../components/Button"
import { ProjectCard } from "../../components/ProjectCard"

import {
  Container,
  Header,
  Title,
  Projects,
  ProjectsList,
} from './styles';

export function Dashboard(){
  return (
    <Container>
        <Header>
            <Title>Projetos</Title>
            <Button title="+ Adicionar"  onPress={() => {}}></Button>
        </Header>
        <Projects>
            <ProjectsList>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </ProjectsList>
        </Projects>
    </Container>
  );
}