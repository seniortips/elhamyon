import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';

export default StyleSheet.create({
	selectionWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		width: SIZES.width,
	},
	coinNameText: {
		color: '#FFF',
		marginRight: 10,
	},
	dropDown: {
		width: 15,
		height: 15,
	},
});
