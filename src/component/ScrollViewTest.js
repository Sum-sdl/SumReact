/**
 * Created by Summer on 2016/9/26.
 */

import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

export default class ScrollViewTest extends Component {


    render() {
        return (
            <ScrollView style={{backgroundColor:'blue'}}>
                <Text style={{fontSize: 24}}>This is ScrollView</Text>

                <View style={styles.hor}>

                    <Image style={styles.item} source={require('../image/icon_my_fun_1.png')}/>
                    <Image style={styles.item} source={require('../image/icon_my_fun_2.png')}/>
                    <Image style={styles.item} source={require('../image/icon_my_fun_3.png')}/>
                    <Image style={styles.item} source={require('../image/icon_my_fun_4.png')}/>
                </View>

                <View style={styles.hor}>


                    <Image style={styles.item} source={require('../image/icon_my_fun_5.png')}/>
                    <Image style={styles.item} source={require('../image/icon_my_fun_6.png')}/>
                    <Image style={styles.item} source={require('../image/icon_my_fun_7.png')}/>
                    <Image style={styles.item} source={require('../image/icon_my_fun_8.png')}/>

                </View>

            </ScrollView>);

    };

}

var styles = StyleSheet.create({

    hor: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        width:10,
    }

});