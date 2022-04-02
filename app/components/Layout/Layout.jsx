import { SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';

const Layout = (props) => {
	return <SafeAreaView style={styles.layout}>{props.children}</SafeAreaView>;
};

export default Layout;
