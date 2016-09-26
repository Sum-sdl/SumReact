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
import SizeTest from './src/component/SizeTest';
import TextInputTest from './src/component/TextInputTest';
import ScrollViewTest from './src/component/ScrollViewTest';
import ListViewTest from './src/component/ListViewTest';
import FetchDataTest from './src/component/FetchDataTest';
import NavigationTest from './src/component/NavigationTest';

class SumReact extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.view}/>

                {/*自定义按钮*/}
                {/*<Button/>*/}

                {/*样式测试*/}
                {/*<TestStyle/>*/}

                {/*布局测试*/}
                {/*<LayoutTest/>*/}

                {/*属性测试*/}
                {/*<DataTest text="Hello State"/>*/}

                {/*dp,weigh*/}
                {/*<SizeTest/>*/}

                {/*<TextInputTest/>*/}

                {/*<ListViewTest/>*/}

                {/*<ScrollViewTest/>*/}

                {/*<FetchDataTest/>*/}

                <NavigationTest/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,//权重 weigh
        justifyContent: 'flex-start',//gray:center-vertical
        backgroundColor: '#F5FCa0',
        flexDirection: 'column',//线性布局 orientation，column:垂直方法，row:水平方向
        alignItems: 'stretch',//gray:center-horizontal
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
        backgroundColor: 'red',
        width: 200,
        height: 100,
    },
});

AppRegistry.registerComponent('SumReact', () => SumReact);
