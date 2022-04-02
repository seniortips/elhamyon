import { View, Image, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { dummyUser } from '../../constants/data';

const CoinsView = ({ item }) => {
	return (
		<View style={styles.coinContainer}>
			{/* LEFT-SIDE Container */}
			<View style={styles.leftSideContainer}>
				{/* CoinImage */}
				<Image source={item.image} style={styles.coinStyle} />
				{/* CoinDetails */}
				<View style={{ flexDirection: 'column' }}>
					{/* CoinName */}
					<View style={styles.coinNameContainer}>
						<Text style={styles.coinName}>{item.coinName}</Text>
					</View>
					{/* CoinPrice */}
					<View style={styles.priceContainer}>
						<Text style={styles.coinPrice}>${item.price}</Text>
						<Text
							style={[
								styles.pricePercent,
								{ color: item.isPositive ? '#75e268' : 'red' },
							]}>
							{item.isPositive ? '+' : '-'}
							{item.marketChange} %
						</Text>
					</View>
				</View>
			</View>
			{/* RIGHT-SIDE Container */}
			<View>
				<Text style={{ color: '#FFF', fontSize: 16, fontWeight: '500' }}>
					{item.amount} {item.suffix}
				</Text>
			</View>
		</View>
	);
};

export default CoinsView;
