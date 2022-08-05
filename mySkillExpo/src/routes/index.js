
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../pages/login'
import Find from '../pages/find'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Find" component={Find} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}