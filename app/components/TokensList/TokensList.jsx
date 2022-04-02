import React from 'react';
import { FlatList } from 'react-native';
import { dummyUser } from '../../constants/data';
import { CoinsView } from '../CoinsView';

const TokensList = () => {
	return (
		<FlatList
			data={dummyUser.walletBalance}
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => <CoinsView item={item} />}
		/>
	);
};

export default TokensList;
