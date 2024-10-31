import { View, Text, Image, Platform } from "react-native";
import React from "react";
import { PokemonStyle } from "../App";

const PokemonCard = ({ data }: { data: PokemonStyle }) => {
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
    android: {
      elevation: 6,
      shadowColor: "black", // This helps with the color on Android
    },
  });
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 2,
          borderStyle: "solid",
          maxHeight: 400,
          height: 400,
          borderRadius: 20,
          width: "90%",
          padding: 10,
          marginHorizontal: "auto",
          gap: 15,
        },
        shadowStyle,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.name}</Text>
        <Text style={{ fontWeight: "500" }}>❤️ HP: {data.HP}</Text>
      </View>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "black",
          borderWidth: 2,
        }}
      >
        <Image
          source={{
            uri: data.image,
          }}
          style={{
            width: "100%",
            height: 200,
            shadowColor: "none",
            objectFit: "contain",
          }}
        ></Image>
      </View>
      <Text
        style={{
          borderColor:
            data.type == "Grass"
              ? "green"
              : data.type == "Fire"
              ? "red"
              : data.type == "Water"
              ? "blue"
              : data.type == "Electric"
              ? "orange"
              : "purple",
          borderWidth: 2,

          borderStyle: "solid",
          width: 100,
          padding: 5,
          borderRadius: 10,
          textAlign: "center",
          alignSelf: "center",
          color:
            data.type == "Grass"
              ? "green"
              : data.type == "Fire"
              ? "red"
              : data.type == "Water"
              ? "blue"
              : data.type == "Electric"
              ? "orange"
              : "purple",
        }}
      >
        {data.type}
      </Text>
      <Text style={{ fontWeight: "bold" }}>Moves: {data.moves.join(", ")}</Text>
      <Text style={{ fontWeight: "bold" }}>
        Weakness: {data.weakness.join(", ")}
      </Text>
    </View>
  );
};

export default PokemonCard;
