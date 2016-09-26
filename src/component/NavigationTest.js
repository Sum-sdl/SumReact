/**
 * Created by Summer on 2016/9/26.
 */

import React, {Component, PropTypes} from 'react';
import {View, TouchableOpacity, Text, Navigator} from 'react-native';
import NavigationScene from './NavigationScene';


export default class NavigationTest extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{title: "Hello World", index: 0}}

                renderScene={
                    (route, navigator) => {

                        console.log("route===="+route);

                        return <NavigationScene
                            title={route.title}

                            // Function to call when a new scene should be displayed
                            onForward={ () => {
                                const nextIndex = route.index + 1;
                                navigator.push({
                                    title: 'Scene ' + nextIndex,
                                    index: nextIndex,
                                });
                            }}

                            // Function to call to go back to the previous scene
                            onBack={() => {
                                if (route.index > 0) {
                                    navigator.pop();
                                }
                            }}
                        />
                    }
                }

            />

        )
    }

}