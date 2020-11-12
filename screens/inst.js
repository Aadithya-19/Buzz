import React from 'react';
import {Button} from 'react-native';
import * as Linking from 'expo-linking';

export default class Instagram extends React.Component{
    render(){
        handlePress = () => {
            Linking.openURL('https://www.facebook.com/');
          };
        return(
          <Button
            title="Facebook"
            onPress={this.handlePress}
            style={styles.button}
        />        
        )
    }
} 