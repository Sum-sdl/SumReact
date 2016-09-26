/**
 * Created by Summer on 2016/9/26.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

export default class SizeTest extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor: 'blue',flexDirection:'row'}}>

                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />

            </View>
        );
    }
}