import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { SIZES } from '../../constants/theme';

const ActionButtons = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				padding: 10,
				justifyContent: 'space-between',
				marginHorizontal: SIZES.width / 8,
				marginVertical: 20,
			}}>
			<TouchableOpacity
				style={{
					borderRadius: 50,
					width: 80,
					height: 35,
					backgroundColor: '#202832',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text
					style={{
						color: '#FFF',
					}}>
					Sent
				</Text>
			</TouchableOpacity>
			{/* Receive */}
			<TouchableOpacity
				style={{
					borderRadius: 50,
					width: 80,
					height: 35,
					backgroundColor: '#202832',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text
					style={{
						color: '#FFF',
					}}>
					Receive
				</Text>
			</TouchableOpacity>
			{/* Buy */}
			<TouchableOpacity
				style={{
					borderRadius: 50,
					width: 80,
					height: 35,
					backgroundColor: '#202832',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text
					style={{
						color: '#FFF',
					}}>
					Buy
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ActionButtons;
