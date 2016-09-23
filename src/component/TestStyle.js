/**
 * Created by Summer on 2016/9/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TestStyle extends Component {
    render() {
        return (
            <View>

                <Text style={[styles.red, {
                    width: 50,
                    height: 100,
                    fontSize: 20,
                    backgroundColor: 'blue',
                    alignItems: 'center'
                }]}>just red and
                    fontSize =20</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
        fontSize: 24,
    },
});