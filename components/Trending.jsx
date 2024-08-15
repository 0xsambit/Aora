import {
	FlatList,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import * as Animatable from "react-native-animatable";

const zoomIn = {
	0: {
		scale: 0.9,
	},

	1: {
		scale: 1,
	},
};
const zoomOut = {
	0: {
		scale: 1,
	},

	1: {
		scale: 0.9,
	},
};

const TrendingItem = ({ activeItem, item }) => {
	const [play, setPlay] = useState(false);
	return (
		<Animatable.View
			style={{ marginRight: 20 }}
			animation={activeItem === item.$id ? zoomIn : zoomOut}
			duration={500}>
			{play ? (
				<Text style={{ color: "white" }}>Playing</Text>
			) : (
				<TouchableOpacity
					style={{
						position: "relative",
						justifyContent: "center",
						alignItems: "center",
					}}
					activeOpacity={0.7}
					onPress={() => setPlay(true)}>
					<ImageBackground
						source={{ uri: item.thumbnail }}
						style={styles.trending}
						resizeMode='cover'
					/>
					<Image source={icons.play} />
				</TouchableOpacity>
			)}
		</Animatable.View>
	);
};
const Trending = ({ posts }) => {
	const [activeItem, setActiveItem] = useState(posts[0]);
	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.$id}
			renderItem={({ item }) => (
				<TrendingItem activeItem={activeItem} item={item} />
			)}
			horizontal
		/>
	);
};

export default Trending;

const styles = StyleSheet.create({
	trending: {
		width: 208,
		height: 288,
		borderRadius: 35,
		marginVertical: 20,
		overflow: "hidden",
		shadowColor: "rgba(0,0,0,0.4)",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 10,
	},
});
