import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreenStack from './src/navigators/HomeNavigator'

//STARTING POINT OF YOUR APP -> notice we are passing in our STACK NAVIGATOR
//NavigationContainer is responsible for bringing our parent most navigator to your device i.e. HomeScreeStack

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App;
