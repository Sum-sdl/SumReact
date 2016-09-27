/**
 * Created by Summer on 2016/9/26.
 */

import React, {Component} from 'react';
import {View, Animated, Text, TouchableOpacity, StyleSheet, LayoutAnimation} from 'react-native';

export default class AnimationViewTest2 extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            w: 100,
            h: 100
        }
    }

    componentWillMount() {
        // 创建动画
        LayoutAnimation.spring();
    }

    _onPress() {
        // 让视图的尺寸变化以动画形式展现
        LayoutAnimation.spring();

        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={[styles.box, {width: this.state.w, height: this.state.h}]}/>

                <TouchableOpacity onPress={this._onPress}>
                    <View >
                        <Text >Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


var styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    box: {

        width: 100,
        height: 100,
        backgroundColor: 'red'
    }

});