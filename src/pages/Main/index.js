import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewOverflow from 'react-native-view-overflow';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { 
  Container, 
  Content, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  Title, 
  Description, 
  Annotation,
  Dots,
  Dot,
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY > 99) {
        opened = true;
      } else {
        translateY.setOffset(offset);
        translateY.setValue(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

      
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              })
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Title>NuConta</Title>
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title> 
              <Description>R$ 1.197.611,65</Description>
            </CardContent>
            <ViewOverflow>
              <CardFooter>              
                <Icon name="attach-money" size={28} color="#666" />
                <Annotation>
                  Transferência de R$ 452.5432,32 recebida de Corelab Treinamento em Informática Ltda
                </Annotation>              
              </CardFooter>
            </ViewOverflow>
          </Card>
        </PanGestureHandler>
      </Content>

      <Dots style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [1, 0.3],
        }),
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          })
        }]
      }}>
        <Dot />
        <Dot />
        <Dot />
      </Dots>

      <Tabs translateY={translateY} />
    </Container>
  );
}