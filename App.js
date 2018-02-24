// import React, { Component } from 'react';
// import { Text } from 'react-native';

// export default class HellworldApp extends Component {
//   render() {
//     return (
//       <Text>Hello World!</Text>
//     );
//   }
// }


import React from 'react';
import { Alert, AppRegistry, Image, StyleSheet, Text, View, Button, TouchableHighlight, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onLongPressButton() {
    Alert.alert("You pressed the button for a long")
  }
  render() {
    console.log("Logs are forwarded too!")
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Blah!</Text>
        
        <Greeting name='First_Name' />
        <Greeting name='Second_name' />
        <Greeting name='Third_Name' />

        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
        <View style={long_button_press.button_container}>
          <TouchableHighlight
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}>
            <View style={long_button_press.this_button}>
              <Text style={long_button_press.butttonText}>Press <Text style={{color: '#FCB51E'}}>Me</Text> First</Text>
            </View>
          </TouchableHighlight>
        </View>
        
        <View style={styles_button.container}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles_button.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles_button.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles_button = StyleSheet.create({
  button_container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const long_button_press = StyleSheet.create({
  button_container:{
    paddingTop: 60,
    alignItems: "center"
  },
  this_button:{
    width: 150,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText:{
    padding: 20,
    color: "white"
  }
})

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Bananas);

