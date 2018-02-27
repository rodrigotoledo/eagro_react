import React, {Component} from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { Container } from 'native-base';

import styles from 'styles';
import CommonFooter from 'components/CommonFooter';
import CommonHeader from "components/CommonHeader";


class GlobalDoubts extends Component {
		render() {
				return <ImageBackground style={styles.bgApp} source={require("imgs/bg.png")}>
            <CommonHeader icon="ios-help-circle" title="Dúvidas Gerais" bgColor="#009933" />
            <Container>
              <View style={styles.generalContainer}>
                <ScrollView style={styles.generalScrollView} />
              </View>
              <CommonFooter />
            </Container>
          </ImageBackground>;
		};
};

export default GlobalDoubts;
