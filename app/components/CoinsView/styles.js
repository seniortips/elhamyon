import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	coinContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 30,
	},
	leftSideContainer: {
		flexDirection: 'row',
	},
	coinStyle: {
		width: 40,
		height: 40,
		marginRight: 10,
	},
	coinNameContainer: {
		marginBottom: 10,
	},
	coinName: {
		color: '#FFF',
		fontWeight: '600',
		fontSize: 16,
	},
	priceContainer: {
		flexDirection: 'row',
	},
	coinPrice: {
		color: '#8fa2b7',
		marginRight: 10,
	},
	pricePercent: {
		fontWeight: '500',
	},
});
