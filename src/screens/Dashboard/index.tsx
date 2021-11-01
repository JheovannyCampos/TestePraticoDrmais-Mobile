import React from 'react';

import { Button } from "../../components/Button"

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
            <ProjectsList

            />
        </Projects>
    </Container>
  );
}