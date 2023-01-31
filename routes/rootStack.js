// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";
// const Stack = createNativeStackNavigator();

// import Post from "../components/Post";
// import Get from "../components/Get";
// import Detail from "../components/Detail";

// const rootStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#941a1d",
//         },
//         headerTintColor: "white",
//       }}>
//       <Stack.Screen
//         name="Get"
//         component={Get}
//         options={({ navigation, route }) => ({
//           title: "Yamada",
//           headerTitleAlign: "center",
//           headerRight: () => (
//             <Ionicons
//               name={"ios-add-circle"}
//               size={30}
//               color={"white"}
//               style={{ marginRight: 15 }}
//               onPress={() => navigation.navigate("Post")}
//             />
//           ),
//         })}
//       />
//       <Stack.Screen name="Post" component={Post} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   );
// };

// export default rootStack;



// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";
// import { Image } from "react-native";

// const Stack = createNativeStackNavigator();

// import Post from "../components/Post";
// import Get from "../components/Get";
// import Detail from "../components/Detail";
// import logo from "../assets/ROI.png";

// const rootStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#941a1d",
//         },
//         headerTintColor: "white",
//       }}>
//       <Stack.Screen
//         name="Get"
//         component={Get}
//         options={({ navigation, route }) => ({
//           headerTitle: () => (
//             <Image
//             source={logo}
//             style = {{width: 100, height: 100, resizeMode: "contain" }}
//             />
//           ),
//           headerTitleAlign: "center",
//           headerRight: () => (
//             <Ionicons
//               name={"ios-add-circle"}
//               size={30}
//               color={"white"}
//               style={{ marginRight: 15 }}
//               onPress={() => navigation.navigate("Post")}
//             />
//           ),
//         })}
//       />
//       <Stack.Screen name="Post" component={Post} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   );
// };

// export default rootStack;



// import React from "react";
// import { View, Text, Image } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";

// const Stack = createNativeStackNavigator();

// import Post from "../components/Post";
// import Get from "../components/Get";
// import Detail from "../components/Detail";
// import logo from "../assets/ROI.png"; // import the logo image

// const rootStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#941a1d",
//         },
//         headerTintColor: "white",
//       }}>
//       <Stack.Screen
//         name="Get"
//         component={Get}
//         options={({ navigation, route }) => ({
//           headerTitle: () => (
//             //creates a view contaner, displays elements in a row
//             //for some reasons i cannot comment down there so i will comment up here,
//             //on line 30
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Image
//                 source={logo}
//                 style={{ width: 100, height: 100, resizeMode: "contain", marginRight: 10 }}
//               />
//               <Text style={{ color: "white", fontWeight: "bold" }}>Yamada</Text>
//             </View>
//           ),
//           headerTitleAlign: "center",
//           headerRight: () => (
//             <Ionicons
//               name={"ios-add-circle"}
//               size={30}
//               color={"white"}
//               style={{ marginRight: 15 }}
//               onPress={() => navigation.navigate("Post")}
//             />
//           ),
//         })}
//       />
//       <Stack.Screen name="Post" component={Post} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   );
// };

// export default rootStack;




// import React from "react";
// import { View, Text, Image } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";

// const Stack = createNativeStackNavigator();

// import Post from "../components/Post";
// import Get from "../components/Get";
// import Detail from "../components/Detail";
// import logo from "../assets/ROI.png"; // import the logo image

// const rootStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#941a1d",
//         },
//         headerTintColor: "white",
//         headerTitle: () => (
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <Image
//               source={logo}
//               style={{ width: 100, height: 100, resizeMode: "contain", marginRight: 10 }}
//             />
//             <Text style={{ color: "white", fontWeight: "bold" }}>Yamada</Text>
//           </View>
//         ),
//         headerTitleAlign: "center",
//       }}>
//       <Stack.Screen name="Get" component={Get} />
//       <Stack.Screen name="Post" component={Post} />
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   );
// };

// export default rootStack;

import React from "react";
import { View, Text, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

import Post from "../components/Post";
import Get from "../components/Get";
import Detail from "../components/Detail";
import logo from "../assets/ROI.png"; // import the logo image

const rootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#941a1d",
        },
        headerTintColor: "white",
      }}>
        
      {/* GET STACKSCREEN */}
      <Stack.Screen
        name="Get"
        component={Get}
        options={({ navigation, route }) => ({
          title: "Yamada",
          headerTitleAlign: "center",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={30}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Post")}
            />
          ),

          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={logo}
                style={{ width: 100, height: 100, resizeMode: "contain", marginRight: 10 }}
              />
              <Text style={{ color: "white", fontWeight: "bold" }}>Employee Display</Text>
            </View>
          ),

          title: "Get Screen",
          headerTitleAlign: "center",
        })}
      />

      {/* POST STACKSCREEN */}
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={logo}
              style={{ width: 100, height: 100, resizeMode: "contain", marginRight: 10 }}
            />
            <Text style={{ color: "white", fontWeight: "bold" }}>Add Employee</Text>
          </View>
        ),
          title: "Post Screen",
          headerTitleAlign: "center",
        }}
      />

      {/* UPDATE/DELETE STACKSCREEN */}
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={logo}
                style={{ width: 100, height: 100, resizeMode: "contain", marginRight: 10 }}
              />
              <Text style={{ color: "white", fontWeight: "bold" }}>Employee Details</Text>
            </View>
          ),
          title: "Detail Screen",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default rootStack;