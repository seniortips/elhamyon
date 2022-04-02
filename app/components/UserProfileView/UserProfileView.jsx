import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const UserProfileView = () => {
	return (
		<View style={styles.userPicContainer}>
			<Image
				source={require('../../constants/images/avatarGirl.png')}
				style={styles.userPic}
			/>
			<Image
				source={require('../../constants/images/swap.png')}
				style={styles.swap}
			/>
		</View>
	);
};

export default UserProfileView;
