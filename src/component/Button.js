/**
 * Created by Summer on 2016/9/23.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

export default class Button extends Component {

    constructor(props) {
        super(props)

        this.state = {status: 10}
    }

    customHandlerPress = () => {
        const {onPress}=this.props;
        onPress();
    }

    render() {

        const {text} = this.props;

        return (

            <View style={styles.container}>

                <TouchableOpacity style={styles.button}
                                  onPress={this.customHandlerPress}>
                    <Text style={styles.text}>
                        {text}
                    </Text>

                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    button: {
        width: 100,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
    },

    text: {
        fontSize: 16,
        color: 'white',
    },
});
