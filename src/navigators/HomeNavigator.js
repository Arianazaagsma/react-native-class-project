import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
};

export default HomeScreenStack;