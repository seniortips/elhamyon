import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const Balance = (props) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Text style={styles.balanceAmount}>9.2362 ETH</Text>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ color: '#FFF', marginRight: 10 }}>$16,858.15</Text>
				<Text style={{ color: 'green' }}>+0.7%</Text>
			</View>
		</View>
	);
};

export default Balance;
