/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Button from './src/component/Button';
import TestStyle from './src/component/TestStyle';
import LayoutTest from './src/component/LayoutTest';
import DataTest from './src/component/DataTest';

class SumReact extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/*<View  style={styles.view} />*/}

                {/*自定义按钮*/}
                {/*<Button/>*/}

                {/*样式测试*/}
                {/*<TestStyle/>*/}

                {/*布局测试*/}
                <LayoutTest/>

                {/*<DataTest text="Hello State"/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#F5FCaa',
        flexDirection:'column',
        alignItems:'center',
    },

    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
        fontSize: 24,
    },

    view: {
        backgroundColor:'red',
        width:70,
        height:90,
    },
});

AppRegistry.registerComponent('SumReact', () => SumReact);
