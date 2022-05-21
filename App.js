import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Src/Navigation/MainNavigation';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export default function App({ navigation }) {

  // const toastConfig = {
  //   success: (props) => (
  //     <BaseToast
  //       {...props}
  //       style={{ borderLeftColor: 'green' }}
  //       contentContainerStyle={{ paddingHorizontal: 15 }}
  //       text1Style={{
  //         fontSize: 17,
  //         fontWeight: 'bold',
  //         textAlign: "center"
  //       }}
  //       text2Style={{
  //         fontSize: 17,
  //         color: "black",
  //       }}
  //     />
  //   ),

  //   error: (props) => (
  //     <ErrorToast
  //       {...props}
  //       text1Style={{
  //         fontSize: 17,
  //         fontWeight: 'bold',
  //         textAlign: "center"
  //       }}
  //       text2Style={{
  //         fontSize: 16,
  //         color: "gray",

  //       }}
  //     />
  //   ),

  //   tomatoToast: ({ text1, props }) => (
  //     <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
  //       <Text>{text1}</Text>
  //       <Text>{props.uuid}</Text>
  //     </View>
  //   )
  // };

  return (
    <NavigationContainer >
      <MainNavigation {...navigation} />
      {/* <Toast position='bottom' config={toastConfig} /> */}
    </NavigationContainer>
  );
}
