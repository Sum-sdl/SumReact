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


export default class DataTest extends Component {

    // props 在指定后不能修改
    // state 可以修改，推荐在constructor中初始化需要的状态属性,修改调用setState({})

    constructor(props) {
        super(props)

        this.state = {Visible: true};

        setInterval(() => {
            this.setState({Visible: !this.state.Visible});
        }, 300);
    }


    render() {

        let display = this.state.Visible ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}