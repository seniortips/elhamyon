import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
	UserProfileView,
	CoinSelectionView,
	Layout,
	Balance,
	ActionButtons,
	TokensList,
} from '../../components';
import { SIZES } from '../../constants/theme';

const WalletScreen = () => {
	return (
		<Layout>
			<View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
				<UserProfileView />
				<CoinSelectionView />
			</View>
			<Balance />
			<ActionButtons />
			<View style={{ height: 370 }}>
				<TokensList />
			</View>
			<TouchableOpacity
				style={{ backgroundColor: '#1212', marginVertical: 20 }}>
				<Text
					style={{
						color: '#5f97ff',
						textAlign: 'center',
						fontWeight: SIZES.fontWeight1,
						fontSize: SIZES.body4,
					}}>
					+ Add Tokens
				</Text>
			</TouchableOpacity>
		</Layout>
	);
};

export default WalletScreen;
