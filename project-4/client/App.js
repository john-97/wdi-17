import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";

// file imports
import Login from './src/components/LoginNav/Login/index'
import SignUp from './src/components/LoginNav/SignUp/index'

import Chat from './src/components/ChatNav/Chat/index'
import Message from './src/components/ChatNav/Message/index'
import New from './src/components/ChatNav/New/index'

import Settings from './src/components/SettingsNav/Settings/index'
import SettingsEdit from './src/components/SettingsNav/SettingsEdit/index'

const AppNavigator = createStackNavigator({
    Login: createStackNavigator({
        LoginComponent: Login,
        SignUp: SignUp
    },
    {
      headerMode: "none",
      navigationOptions: {
        headerVisible: false
      }
    }),
    App: createBottomTabNavigator({
        Chat: createStackNavigator({
            ChatComponent: Chat,
            Message: Message,
            New: New
        },
        {
          headerMode: "none",
          navigationOptions: {
            headerVisible: false
          }
        }),
        Settings: createStackNavigator({
            SettingsComponent: Settings,
            SettingsEdit: SettingsEdit
        },
        {
          headerMode: "none",
          navigationOptions: {
            headerVisible: false
          }
        })
    })
},
{
  headerMode: "none",
  navigationOptions: {
    headerVisible: false
  }
})
const RootStack = createAppContainer(AppNavigator);

// WRAPPING ROOT STACK NAVIGATOR WITH PROVIDER (REDUX STORE)
import React, { Component } from "react";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers/rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;



