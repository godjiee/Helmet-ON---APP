import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import Details from "../screens/Details"

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default AppStack;