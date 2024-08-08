import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<Text style={{ color: "white" }}>{item.id}</Text>
			)}
			horizontal
		/>
	);
};

export default Trending;

const styles = StyleSheet.create({});
