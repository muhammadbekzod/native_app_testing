import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/Home';
import Timer from './screens/Timer';
import Categories from './screens/Categories';
import Customize from './screens/Customize';
import Settings from './screens/Settings';
import Backups from './screens/Backups';
import GetPremuim from './screens/GetPremuim';
import RateApp from './screens/RateApp';
import Contact from './screens/Contact';
import User from "./assets/user.jpg";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
         drawerContent={
          (props) => {
            return (
            <SafeAreaView>
              <View style={{
                height: 220,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1
              }}>
                <Image
                  source={User}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65
                  }}
                />
                <Text
                 style={{
                  fontSize:22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111"
                 }}
                >Isabella Joanna</Text>
                <Text
                 style={{
                  fontSize: 16,
                  color: "#111"
                 }}
                >Product Manager</Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
            )
          }
         }
        screenOptions={{
          drawerStyle:{
            backgroundColor: '#fff', //Set Drawer background"
            width: 250,
          },
          headerStyle:{
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle:{
            fontWeight: 'bold'
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle:{
            color: "#111" // set color of drawer label
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),
          }}
          component={Home}
        />
         <Drawer.Screen
          name="Timer"
          options={{
            drawerLabel: "Timer",
            title: "Timer",
            drawerIcon: ()=>(
              <MaterialIcons name="timer" size={20} color="#808080" />
            )
          }}
          component={Timer}
        />
         <Drawer.Screen
          name="Categories"
          options={{
            drawerLabel: "Categories",
            title: "Categories",
            drawerIcon: () =>(
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Categories}
        />

        <Drawer.Screen
          name="Customize"
          options={{
            drawerLabel: "Customize",
            title: "Customize",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={Customize}
        />
         <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ()=>(
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Settings}
        />

        <Drawer.Screen
          name="Backups"
          options={{
            drawerLabel: "Backups",
            title: "Backups",
            drawerIcon: ()=>(
              <MaterialIcons name="backup" size={20} color="#808080" />
            )
          }}
          component={Backups}
        />
         <Drawer.Screen
          name="Get Premium"
          options={{
            drawerLabel: "Get Premuim",
            title: "Get Premuim",
            drawerIcon: () =>(
              <MaterialCommunityIcons name="certificate" size={20} color="#808080" />
            )
          }}
          component={GetPremuim}
        />
         <Drawer.Screen
          name="Rate this App"
          options={{
            drawerLabel: "Rate this App",
            title: "Rate this App",
            drawerIcon: ()=>(
              <FontAwesome name="star" size={20} color="#808080" />
            )
          }}
          component={RateApp}
        />
         <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: "Contact Us",
            title: "Contact",
            drawerIcon: () =>(
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            )
          }}
          component={Contact}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
