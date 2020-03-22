import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, Form, Input, SubmitButton } from './styles';
import colors from '../../styles/themes/colors';
import { responsiveSize } from '../../styles/themes/responsive';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon
            name="adduser"
            size={responsiveSize(25)}
            color={colors.ColorLightPrimary}
          />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
