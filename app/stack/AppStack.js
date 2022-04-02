import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WalletScreen, SwapScreen } from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='WalletScreen'
				component={WalletScreen}
				options={{
					headerShown: false,
					tabBarLabel: 'Wallet',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='wallet' color={color} size={34} />
					),
				}}
			/>
			<Tab.Screen name='SwapScreen' component={SwapScreen} />
			{/* <Tab.Screen name='SettingsScreen' component={SettingsScreen} /> */}
		</Tab.Navigator>
	);
}
