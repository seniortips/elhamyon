import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const CoinSelectionView = () => {
	return (
		<View style={styles.selectionWrapper}>
			<Text style={styles.coinNameText}>Ethereum Main</Text>
			<Image
				source={require('../../constants/images/dropDown.png')}
				style={styles.dropDown}
			/>
		</View>
	);
};

export default CoinSelectionView;
