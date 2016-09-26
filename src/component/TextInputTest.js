/**
 * Created by Summer on 2016/9/26.
 */
import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text
} from 'react-native';

export default class TextInputTest extends Component {


    constructor(props) {
        super(props);
        this.state = {text: ''};
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'powderblue', flexDirection: 'column'}}>

                <TextInput style={{height: 40}}
                           placeholder="Type here to translate!"
                           onChangeText={(text) => this.setState({text})}
                />

                <Text>
                    input:{this.state.text}
                </Text>

                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

            </View>
        );
    }
};