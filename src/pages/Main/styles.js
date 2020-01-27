import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background:  #8B10AE;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const CardFooter = styled.View`
  padding: 30px 20px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
  text-align: left;
  width: 70%;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  flex: 1;
`;

export const Dots = styled(Animated.View)`
  flex-direction: row;
  margin-top: 20px; 
  margin: 0 auto;
`;

export const Dot = styled.View`
  height: 8px; 
  width: 8px;
  background-color: #c2c2c2;
  margin: 8px;
  border-radius: 5px;
`;