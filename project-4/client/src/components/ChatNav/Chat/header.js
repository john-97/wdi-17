import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image,
    TouchableOpacity
} from 'react-native'
import styles from './style'

export default class header extends Component {
  render() {
    return (
        <View style={styles.headerbody}>
            <View style={styles.header1}>
                {/* PROFILE ICON */}
                <TouchableOpacity
                    onPress={()=>{this.props.navigate("Settings")}}
                >
                    <Image
                        style={{width: 40, height: 40, margin: 5}}
                        source={require('../../../assets/default-profile-pic.png')}
                    />
                </TouchableOpacity>
                {/* APP NAME */}
                <Text style={{fontSize: 30, margin: 5}}>
                    Chattie
                </Text>
                {/* NEW MESSAGE */}
                <TouchableOpacity
                    onPress={()=>{this.props.navigate("New")}}
                >
                    <Image
                        style={{width: 30, height: 30, margin: 10}}
                        source={require('../../../assets/new-chat.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.header2}>
                <TouchableOpacity onPress={()=>{this.props.navigate("New")}}>
                <Text style={{margin: 5}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Text style={{margin: 5}}>New Group</Text>
                </TouchableOpacity>
            </View>
      </View>
    )
  }
}
