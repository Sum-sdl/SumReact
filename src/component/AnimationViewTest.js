/**
 * Created by Summer on 2016/9/26.
 */

import React, {Component} from 'react';
import {View, Animated, Text, Image, StyleSheet} from 'react-native';

export default class AnimationViewTest extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            bounceValue: new Animated.Value(0),
        }
    }

    render() {
        return (
            <Animated.Image                         // 可选的基本组件类型: Image, Text, View
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
                    flex: 1,
                    transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                        {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                    ]
                }}

                onPress={this._AnimStart()}/>
        );

    };

    _AnimStart() {
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();
    }

    componentDidMount() {
        _AnimStart();
    }

}

var styles = StyleSheet.create({

    hor: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        width: 10,
    }

});