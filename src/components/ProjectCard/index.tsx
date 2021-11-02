import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';

import {
  Container,
  Code,
  Title,
  Description,
  Details,
} from './styles';

interface Props extends TouchableOpacityProps{
    data: ProjectsDTO;
    onPress?: () => any;
}

export function ProjectCard({data, onPress, ...rest}: Props){
  return (
    <Container 
      onPress={onPress}
      {...rest}
    >
        <Details>
            <Code>{data.idprojeto}</Code>
            <Title>{data.ds_titulo}</Title>
            <Description>{data.ds_descricao}</Description>
        </Details>
    </Container>
  );
}