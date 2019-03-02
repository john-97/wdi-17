import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './style'

class Header extends Component {
  render() {
    return (
      <View style={styles.headerBody}>
        <TouchableOpacity
          onPress={()=>{this.props.navigate("ChatComponent")}}
        >
          <Image
              source={require('../../../assets/back-arrow.png')}
              style={{height: 30, width: 30, margin: 10, marginRight:30}}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW CHAT</Text>
        <TouchableOpacity
          onPress={this.props.handleSubmit}
        >
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Header
