import React, { Component } from 'react';

import { View } from 'react-native';
import { Header, Left, Body, Icon, Text } from 'native-base';

import styles from 'styles';

class CommonHeaderOnlyCenter extends Component {

	render() {
		const headerTitle = this.props.title || "eAgro::Projects";
		const bgColor = this.props.bgColor || '#009933'
		const icon = this.props.icon || 'home'

		return (
			<Header style={this.props.bgColor ? {backgroundColor: this.props.bgColor} : {backgroundColor: '#009933'}}>
				<Left />
				<Body>
					<View style={{flexDirection: 'row'}}>
						<Icon name={icon} style={{color: '#ffffff'}} />
						<Text style={styles.customHeader}>{headerTitle}</Text>
					</View>
				</Body>
			</Header>
		);
	}
}

export default CommonHeaderOnlyCenter;
