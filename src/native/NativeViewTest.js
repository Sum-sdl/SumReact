/**
 * Created by Summer on 2016/9/27.
 */

import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import Toast from './NativeModelTest';

import Button from '../component/Button';

'use strict';

export default class NativeViewTest extends Component {

    render() {
        return (

            <Button text="Toast" onPress={() => {
                Toast.show("Hello Wrold", Toast.LONG);
            }}/>

        );
    }

}
