import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '../../components';

const SwapScreen = () => {
	return (
		<Layout>
			<View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
				<Text style={{ color: '#FFF' }}>BNB</Text>
			</View>
		</Layout>
	);
};

export default SwapScreen;
