/**
 * Created by Summer on 2016/9/26.
 */

import React, {Component} from "react";
import {ListView, Text, ScrollView} from "react-native";
import Button from "./Button";

export default class FetchDataTest extends Component {

    fetchData = () => {

        this.setState({dataSource: "fetchData"});

        // var res = getMoviesFromApiAsync();
        //
        // console.log(res);

        fetch('http://bbs.reactnative.cn/api/category/3', {
            method: 'GET',
        }).then((response) => response.text())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({dataSource: responseJson});
            })
            .catch(error => {
                console.error(error);
            })
    }

    getMoviesFromApiAsync = () => {
        return fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state = {dataSource: "start"};
    }

    render() {
        return (
            <ScrollView>

                <Button onPress={this.fetchData} text="获取数据"/>

                <Text>{this.state.dataSource}</Text>

            </ScrollView>
        );
    }
}
