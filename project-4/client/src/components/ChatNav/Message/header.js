import React, { Component } from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import styles from './style'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            name: null
        }
        this.generateName = this.generateName.bind(this)
    }
    componentDidMount(){
        this.setState({...this.state, name: this.props.name})
    }
    generateName(){
        if(this.state.name === null){
            return(
                <View>
                    <Text>LOADING...</Text>
                </View>
            )
        }else{
            return(
                <View>
                    <Text style={{fontSize: 25, margin: 10}}>{this.state.name}</Text>
                </View>
            )
        }
    }
  render() {
    return (
      <View style={styles.headerBody}>
        <TouchableOpacity
            onPress={()=>{this.props.navigate("ChatComponent")}}
        >
        <Image 
            source={require('../../../assets/back-arrow.png')}
            style={{height: 30, width: 30, margin: 10}}
        />
        </TouchableOpacity>
        {this.generateName()}
        <TouchableOpacity
        >
        <Image 
            source={require('../../../assets/list.png')}
            style={{height: 30, width: 30, margin: 10}}
        />
        </TouchableOpacity>
      </View>
    )
  }
}
export default Header
