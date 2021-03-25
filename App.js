import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      number: 0,
      btn: 'START',
      last: null
    }


    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);

  }

  start(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btn: 'START'});
    }else{
      this.timer = setInterval( ()=> {
        this.setState({number: this.state.number + 0.1})
      }, 100);
      this.setState({btn: 'STOP'});
    }
  }

  clear(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.number,
      number: 0,
      btn: 'START'
    })
  }


  render(){
    return (
      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.img}
        />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnTxt}>{this.state.btn}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clear}>
            <Text style={styles.btnTxt}>CLEAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastArea}>
            <Text style={styles.lastTxt}>
              {this.state.last > 0 ? 'Last Time: ' + this.state.last.toFixed(2) + 's' : ''}
            </Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },

  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 100,
    height: 40
  },

  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

  btnTxt:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },

  lastArea:{
    marginTop: 40
  },

  lastTxt:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }

});
