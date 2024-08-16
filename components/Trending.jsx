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
import { Video, ResizeMode } from "expo-av";

const zoomIn = {
	0: {
		scale: 0.9,
	},

	1: {
		scale: 1.1,
	},
};
const zoomOut = {
	0: {
		scale: 1.1,
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
				<Video
					source={{ uri: item.video }}
					style={styles.video}
					resizeMode={ResizeMode.CONTAIN}
					useNativeControls
					shouldPlay
					onPlaybackStatusUpdate={(status) => {
						if (status.didJustFinish) {
							setPlay(false);
						}
					}}
				/>
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
					<Image
						source={icons.play}
						style={{ width: 48, height: 48, position: "absolute" }}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			)}
		</Animatable.View>
	);
};
const Trending = ({ posts }) => {
	const [activeItem, setActiveItem] = useState(posts[1]);
	const viewableItemsChanged = ({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setActiveItem(viewableItems[0].key);
		}
	};
	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.$id}
			renderItem={({ item }) => (
				<TrendingItem activeItem={activeItem} item={item} />
			)}
			onViewableItemsChanged={viewableItemsChanged}
			viewabilityConfig={{
				itemVisiblePercentThreshold: 70,
			}}
			contentOffset={{ x: 170 }}
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
	video: {
		width: 208,
		height: 288,
		borderRadius: 35,
		marginTop: 12,
		backgroundColor: "rgba(255, 255, 255, 0.1)",
	},
});
