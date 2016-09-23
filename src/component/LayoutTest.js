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

export default class LayoutTest extends Component {

    render() {

        return (
            <View style={styles.Container}>

                <View style={styles.Container_Item}/>

                <View style={[styles.Container_Item, {backgroundColor: 'powderblue'}]}/>

                <View style={[styles.Container_Item, {backgroundColor: 'skyblue'}]}/>

                <View style={[styles.Container_Item, {backgroundColor: 'steelblue'}]}/>

            </View>

        );

    }

}

const styles = StyleSheet.create({

    Container: {
        flex:1,
        backgroundColor: '#00FCaa',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    Container_Item: {
        width: 50,
        height:40,
        backgroundColor: 'green',
    },

});
