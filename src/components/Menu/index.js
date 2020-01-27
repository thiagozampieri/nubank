import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import { 
  Container, 
  Code, 
  Nav, 
  NavItem, 
  NavText, 
  SignOutButton, 
  SignOutButtonText,
  AccountBox,
  Row,
  FieldText,
  ValueText
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode 
          value="http://www.corelab.com.br"
          size={80}
          backgroundColor="#fff"
          color="#8B10AE"
        />
      </Code>

      <AccountBox>
        <Row>
          <FieldText>Banco</FieldText><ValueText>260 - Nu Pagamentos S.A.</ValueText>
        </Row>
        <Row>
          <FieldText>Agência</FieldText><ValueText>0001</ValueText>
        </Row>
        <Row>
          <FieldText>Conta</FieldText><ValueText>4578336-0</ValueText>
        </Row>
      </AccountBox>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me Ajuda</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>

    </Container>
  )
}