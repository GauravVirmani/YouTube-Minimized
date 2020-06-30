import React from "react";
import { Image, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1496450080853-5f78c43af9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        }}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginLeft: 6,
        }}
      >
        <MaterialIcons name="account-circle" size={50} />
        <View>
          <View>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Channel name
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              Description really
              lôooooooooooooooo11111111111111111111jdsklfsadjfklshafkhdskfhsdjklfhskhfkjshflkjdshfkjdsahfkhsjklfhsakfhkshfong
              descripton
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
