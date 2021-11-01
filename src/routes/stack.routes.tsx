import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { NewProject } from '../screens/NewProject';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
  return (
    <Navigator
    screenOptions={{
        headerShown: false,
        
    }}
    >
        <Screen 
            name="Dashboard"
            component={ Dashboard }
        />
        <Screen 
            name="NewProject"
            component={ NewProject }
        />
    </Navigator>
  );
}