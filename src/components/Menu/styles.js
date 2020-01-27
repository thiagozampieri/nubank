import { StyleSheet } from 'react-native';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const AccountBox = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  text-align: center;
  margin: 0 auto;
`;  

export const FieldText = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-right: 6px;
`;

export const ValueText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
  flex: 1;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
`;
