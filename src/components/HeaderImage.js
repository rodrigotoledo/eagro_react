import React, { Component } from 'react';
import { View, Image } from 'react-native';

class HeaderImage  extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Image source={require('imgs/logo.png')} />
			</View>
		);
	}
}
export default HeaderImage;
