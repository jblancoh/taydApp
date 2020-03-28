import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
// screens
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import RegisterScreen from '../screens/Register';
import DocumentationScreen from '../screens/Documentation';
import LoginScreen from '../screens/Login';
import Components from '../screens/Components';
import Onboarding from '../screens/Onboarding';
import PropertyLocationScreen from '../screens/PropertyLocation';
import PropertyInfoScreen from '../screens/PropertyInfo';

import AgendaIndexScreen from '../screens/agenda/Index';

// settings
import ProScreen from '../screens/Pro';

// drawer
import Menu from './Menu';
import DrawerItem from '../components/DrawerItem';

// header for screens
import Header from '../components/Header';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = 'Search';

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ComponentsStack = createStackNavigator(
  {
    Components: {
      screen: Components,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Components" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const ProStack = createStackNavigator(
  {
    Pro: {
      screen: ProScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Pro" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Documentation: {
      screen: DocumentationScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    PropertyLocation: {
      screen: PropertyLocationScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    PropertyInfo: {
      screen: PropertyInfoScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Components: {
      screen: ComponentsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Components" title="Mis servicios" />
        )
      })
    },
    Agenda: {
      screen: AgendaIndexScreen,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Mi perfil" />
        )
      })
    },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
