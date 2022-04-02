import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	userPicContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginLeft: 15,
		position: 'absolute',
	},
	userPic: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	swap: {
		width: 25,
		height: 25,
		borderRadius: 50,
		position: 'absolute',
		bottom: 0,
		left: 35,
	},
});
