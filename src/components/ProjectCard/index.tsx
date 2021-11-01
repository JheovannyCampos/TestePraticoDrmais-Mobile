import React from 'react';

import {
  Container,
  Code,
  Title,
  Description,
  Details,
} from './styles';

export function ProjectCard(){
  return (
    <Container>
        <Details>
            <Code>123</Code>
            <Title>Projeto Teste</Title>
            <Description>Descrição teste 123</Description>
        </Details>
    </Container>
  );
}