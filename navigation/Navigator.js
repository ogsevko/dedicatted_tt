import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home} from '../components/Home';
import { Info } from '../components/Info';

const Stack = createStackNavigator();

export const Navigator = props => {
  return(
     <Stack.Navigator
      initialRouteName="Home"
      headerMode={false}
     >
      <Stack.Screen
          name="Home"
          component={Home}
          options={{title: "Home Page"}}
      />
      <Stack.Screen
          name="Info"
          component={Info}
          options={{title: "Info"}}
      />
     </Stack.Navigator>
  )
}
