import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "./global.css";
import PokemonCard from "./components/PokemonCard";

export interface PokemonStyle {
  name: string;
  HP: number;
  image: string;
  type: "Electric" | "Fire" | "Grass" | "Water" | "Poison";
  moves: string[];
  weakness: string[];
}
export default function App() {
  const pokemonArray: PokemonStyle[] = [
    {
      name: "Pikachu",
      HP: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfzYtn-eRiOeIygbWQ6S5yecoe-TpaJGngA&s",
      type: "Electric",
      moves: ["Thunder Shock", "Quick Attack", "Iron Tail", "Electro Ball"],
      weakness: ["Ground"],
    },
    {
      name: "Charizard",
      HP: 78,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepZKJxZBJYJBtkrBw8h9nUToxvMjlQf32zg&s",
      type: "Fire",
      moves: ["Flamethrower", "Dragon Claw", "Fly", "Slash"],
      weakness: ["Water", "Electric", "Rock"],
    },
    {
      name: "Bulbasaur",
      HP: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQR0zxyu38n7qRtvwaaf2habMtxLSBJy26Q&s",
      type: "Grass",
      moves: ["Vine Whip", "Razor Leaf", "Seed Bomb", "Take Down"],
      weakness: ["Fire", "Psychic", "Flying", "Ice"],
    },
    {
      name: "Squirtle",
      HP: 44,
      image: "https://img.pokemondb.net/artwork/large/squirtle.jpg",
      type: "Water",
      moves: ["Water Gun", "Bubble", "Bite", "Aqua Tail"],
      weakness: ["Electric", "Grass"],
    },
    {
      name: "Gengar",
      HP: 60,
      image: "https://img.pokemondb.net/artwork/large/gengar.jpg",
      type: "Poison",
      moves: ["Shadow Ball", "Lick", "Sludge Bomb", "Hypnosis"],
      weakness: ["Psychic", "Ghost", "Dark"],
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "pink",
        paddingTop: Platform.OS === "android" ? 50 : 0,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <View
          style={{
            // backgroundColor: "pl",
            alignItems: "center",
            flex: 1,
            gap: 15,
          }}
        >
          {pokemonArray.map((pokemon, index) => (
            <PokemonCard data={pokemon} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: { color: "white" },
});
