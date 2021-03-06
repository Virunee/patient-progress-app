import React from 'react';

import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import HeaderBack from './HeaderBack';

import { DrawerContent } from './DrawerContent';

import Feed from './Feed';
import About from './About';
import SignInScreen from './Sign-in';

import Contacts from './Contacts';
import CallNurse from './CallNurse';
import Support from './Support';
import Faq from './Faq';
import Settings from './Settings';

const ContactStack = createStackNavigator();
const NurseStack = createStackNavigator();
const SupportStack = createStackNavigator();
const FaqStack = createStackNavigator();
const SettingStack = createStackNavigator();
const FeedStack = createStackNavigator();
const AboutStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabScreen = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerContentOptions={{ gestureEnabled: true }} >
        <Drawer.Screen name="Home" component={BottomTabScreen} />
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Sign Out" component={SignInScreen} />
    </Drawer.Navigator>
);

export default MainTabScreen;

const BottomTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Contacts"
        tabBarOptions={{
            activeTintColor: '#a4d4ae',
            inactiveTintColor: '#32AFA9',
            showLabel: false
        }}
        height={60}
    >
        <Tab.Screen
            name="Contacts"
            component={ContactsScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faUserFriends} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="Call Nurse"
            component={NurseScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faPhoneAlt} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="FAQs"
            component={FaqScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faQuestion} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="Support"
            component={SupportScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faHandsHelping} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faCog} color={color} size={35} />
                ),
            }}
        />
    </Tab.Navigator>
)

const ContactsScreen = () => (

    <ContactStack.Navigator
        headerTitleStyle={{}}
    >
        <ContactStack.Screen name="Contacts" component={Contacts} options={({ navigation }) => {
            return {
                headerTitle: () => <Header title='Contacts' navigation={navigation} />, headerTitleAlign: 'center'
            }
        }} />
        <ContactStack.Screen name="Feed" component={Feed}
            // options={({ navigation }) => {
            //     return {
            //         headerBackTitle: () => <HeaderBack title='Feed' navigation={navigation} />, headerTitleAlign: 'center', headerBackTitleVisible: false
            //     }
            // }} 
            options={{ headerTitleAlign: 'center' }}
        />
    </ContactStack.Navigator>

)


const SupportScreen = () => (
    <SupportStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Help and Support' navigation={navigation} />, headerTitleAlign: 'center'
        }
    }}>
        <SupportStack.Screen name="Support" component={Support} options={{
            title: 'Support',
        }} />
    </SupportStack.Navigator>
);

const FaqScreen = () => (
    <FaqStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='FAQs' navigation={navigation} />, headerTitleAlign: 'center'
        }

    }}>
        <FaqStack.Screen name="FAQ" component={Faq} options={{
            title: 'FAQs',

        }} />
    </FaqStack.Navigator>
);


const NurseScreen = () => (
    <NurseStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Call Nurse' navigation={navigation} />, headerTitleAlign: 'center',
        }
    }}>
        <NurseStack.Screen name="Call Nurse" component={CallNurse} options={{
        }} />
    </NurseStack.Navigator>
);

const SettingScreen = () => (
    <SettingStack.Navigator >
        <SettingStack.Screen name="Settings" component={Settings} options={({ navigation }) => {
            return {
                headerTitle: () => <Header title='Settings' navigation={navigation} />, headerTitleAlign: 'center',
            }
        }}
        />
        <SettingStack.Screen name="About" component={About} options={{
            headerTitleAlign: 'center'
        }} />
    </SettingStack.Navigator>
);

const FeedScreen = () => (
    <FeedStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Feed' navigation={navigation} />, headerTitleAlign: 'center',
        }
    }}>
        <FeedStack.Screen name="Feed" component={Feed} options={{
            title: 'Feed',

        }} />
    </FeedStack.Navigator>
);

const AboutScreen = () => (
    <AboutStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='About' navigation={navigation} />, headerTitleAlign: 'center',
        }
    }}>
        <AboutStack.Screen name="About" component={About} options={{
            title: 'About',

        }} />
    </AboutStack.Navigator>
);

const styles = StyleSheet.create({
    menuIcon: {
        paddingLeft: 20,
    },

})

