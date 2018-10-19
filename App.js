import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

import facebook from './assets/facebook_.json';
import noti from './assets/notification_bell.json';
import loading from './assets/skeleton_frame_loading.json';
import search from './assets/search_bar.json';

export default class App extends Component {
  componentDidMount() {
    this.animation.play();
    this.animation1.play();
    this.animation2.play();
    this.animation3.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Animation
              ref={animation => {
                this.animation = animation;
              }}
              style={{
                flex: 1,
                width: 80,
                height: 80
              }}
              loop={true}
              source={facebook}
            />
              <Animation
              ref={animation3 => {
                this.animation3 = animation3;
              }}
              style={{
                flex: 4,
                height: 80
              }}
              loop={true}
              source={search}
            />
              <Animation
              ref={animation1 => {
                this.animation1 = animation1;
              }}
              style={{
                flex: 1,
                width: 80,
                height: 80
              }}
              loop={true}
              source={noti}
            />
        </View>
        <View style={styles.body}>
        <Animation
              ref={animation2 => {
                this.animation2 = animation2;
              }}
              style={{
                flex: 2, 
                // width: 80,
                // height: 80
              }}
              loop={true}
              source={loading}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
  },
  body: {
    flex: 7,
  },
});
