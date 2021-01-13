import React from 'react';
import { Account, SettingsDetails } from '@app/screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsDetails">
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
        options={{ title: 'Настройки (убрать)' }}
      />
      <Stack.Screen name="Account" component={Account} options={{ title: 'Аккаунт' }} />
    </Stack.Navigator>
  );
};

export default Settings;
