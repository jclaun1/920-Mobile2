import React from 'react';
import {
 
  View,
  Image,
  
} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';

import SignUp from '../components/Auth/SignUp';
import Login from '../components/Auth/Login';
import AuthLoadingScreen from '../../AuthLoadingScreen';
import ChooseLocation from '../components/Location/ChooseLocation';
import ChoosePermit from '../components/Permit/ChoosePermit';
import ForgetPassword from '../components/Auth/ForgetPassword';
import ConfirmCode from '../components/Auth/ConfirmCode';
import ResetPassword from '../components/Auth/ResetPassword';
import Main from '../components/Home/Main';
import UnAuthorizedBottomBar from '../components/Common/UnAuthorizedBottomBar';
import Setting from '../components/Home/Setting';
import AccountDetail from '../components/Setting/AccountDetail';
import Feedback from '../components/Setting/Feedback';
import About from '../components/Setting/About';
import Notifications from '../components/Setting/Notifications';
import Options from '../components/Setting/Options';
import EditEmail from '../components/Setting/AccountSetting/EditEmail';
import ChangePassword from '../components/Setting/AccountSetting/ChangePassword';
import ChangeNumber from '../components/Setting/AccountSetting/ChangeNumber';
import Review from '../components/Setting/Review/Review';
import ChangePermitAccount from '../components/Setting/AccountSetting/ChangePermit';
import ReportBug from '../components/Setting/Review/ReportBug';
import RequestFeature from '../components/Setting/Review/RequestFeature';
import NewVersion from '../components/Setting/About/NewVersion';
import TermsOfUse from '../components/Setting/About/TermsOfUse';
import NavigationScreen from '../components/Home/NavigationScreen';




const tabBarOnPress = ({navigation, defaultHandler}) => {
  const {isFocused, state, goBack} = navigation;


  if (isFocused()) {
    if (state.routes.length > 1) {
      for (let i = 0; i < state.routes.length - 1; i += 1) {
        goBack();
      }
    } else {
      defaultHandler();
      // @TODO SCROLL TO TOP OF EACH TAB IF SCROLLABLE, $CALLBACK().
    }
  } else {
    defaultHandler();
  }
};





export const LoginStack = createStackNavigator(
  {
    
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        header: null,
        headerStyle: { backgroundColor: 'transparent' },

      },
    },
  
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'SignUp',
        header: null,

        headerStyle: { backgroundColor: 'transparent' },

      },
    },
    ForgetPassword: {
      screen: ForgetPassword,
      navigationOptions: {
        title: 'ForgetPassword',
        header: null,

        headerStyle: { backgroundColor: 'transparent' },

      },
    },
    ConfirmCode: {
      screen: ConfirmCode,
      navigationOptions: {
        title: 'ConfirmCode',
        header: null,
        headerStyle: { backgroundColor: 'transparent' },

      },
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: {
        title: 'ResetPassword',
        header: null,

        headerStyle: { backgroundColor: 'transparent' },

      },
    },
    ChooseLocation: {
      screen: ChooseLocation,
      navigationOptions: {
        title: 'ChooseLocation',
        header: null,
        headerStyle: { backgroundColor: 'transparent' },

      },
    },
    ChoosePermit: {
      screen: ChoosePermit,
      navigationOptions: {
        title: 'ChooseLocation',
        header: null,
        headerStyle: { backgroundColor: 'transparent' },

      },
    },
  },
  {
    initialRouteName: 'Login',
    transitionConfig,
  },
);

export const SignUpStack = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'SignUp',
        header: null,
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: 'transparent' },

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
);

export const SettingStack = createSwitchNavigator(
  {
    Setting: {
      screen: Setting,
      navigationOptions: {
        title: 'Setting',
        header: null,
      },
    },
    AccountDetail: {
      screen: AccountDetail,
      navigationOptions: {
        title: 'AccountSetting',
        header: null,
      },
    },
    EditEmail: {
      screen: EditEmail,
      navigationOptions: {
        title: 'EditEmail',
        header: null,
      },
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        title: 'EditEmail',
        header: null,
      },
    },
    ChangeNumber: {
      screen: ChangeNumber,
      navigationOptions: {
        title: 'ChangeNumber',
        header: null,
      },
    },
    
    FeebackDetail: {
      screen: Feedback,
      navigationOptions: {
        title: 'Feeback',
        header: null,
      },
    },
    
    NewVersion: {
      screen: NewVersion,
      navigationOptions: {
        title: 'NewVersion',
        header: null,
      },
    },
    
    RequestFeature: {
      screen: RequestFeature,
      navigationOptions: {
        title: 'RequestFeature',
        header: null,
      },
    },
    
    ReportBug: {
      screen: ReportBug,
      navigationOptions: {
        title: 'ReportBug',
        header: null,
      },
    },
    ChangePermitAccount: {
      screen: ChangePermitAccount,
      navigationOptions: {
        title: 'ChangePermitAccount',
        header: null,
      },
    },
    Review: {
      screen: Review,
      navigationOptions: {
        title: 'Review',
        header: null,
      },
    },
    TermsOfUse: {
      screen: TermsOfUse,
      navigationOptions: {
        title: 'TermsOfUse',
        header: null,
      },
    },
    
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        title: 'Feeback',
        header: null,
      },
    },
    
    Options: {
      screen: Options,
      navigationOptions: {
        title: 'Feeback',
        header: null,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'About',
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Setting',
    
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: 'transparent' },

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
);



export const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Home',
       
        header: null,

      },
    },

    // NavigationScreen: {
    //   screen: NavigationScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'NavigationScreen',
       
    //     header: null,

    //   },
    // },

    SettingStack,
    // Setting: {
    //   screen: Setting,
    //   navigationOptions: {
    //     tabBarLabel: 'Setting',
       
    //   },
    // },
  },
 
  {
    tabBarOptions: {
      style: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 40,
        paddingBottom: 5,
    },
      activeTintColor: 'orange',
      inactiveTintColor: '#660165',
    },
    tabBarComponent: props =>{
            return(
              <UnAuthorizedBottomBar {...props} />

            );
        },

   
  },
);
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

export const Router = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    UnAuthenticated: LoginStack,
    MainScreen: Tabs,
    NavigationScreen: NavigationScreen,
      
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig,
  },
);
