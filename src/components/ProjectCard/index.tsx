import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';

import {
  Container,
  Code,
  Title,
  Description,
  Details,
} from './styles';

interface Props extends RectButtonProps{
    data: ProjectsDTO;
    onPress?: () => void;
}

export function ProjectCard({data, onPress, ...rest}: Props){
  return (
    <Container
        {...rest}
        onPress={onPress}
    >
        <Details>
            <Code>{data.idprojeto}</Code>
            <Title>{data.ds_titulo}</Title>
            <Description>{data.ds_descricao}</Description>
        </Details>
    </Container>
  );
}