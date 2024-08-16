import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({
	video: {
		title,
		thumbnail,
		video,
		creator: { username, avatar },
	},
}) => {
	const [play, setPlay] = useState(false);
	return (
		<View style={styles.viewContainer1}>
			<View style={styles.viewContainer2}>
				<View style={styles.viewContainer3}>
					<View style={styles.viewContainer4}>
						<Image
							source={{ uri: avatar }}
							style={styles.image1}
							resizeMode='cover'
						/>
					</View>
					<View style={styles.viewContainer5}>
						<Text
							style={{
								color: "white",
								fontFamily: "Poppins-SemiBold",
								fontSize: 14,
							}}
							numberOfLines={1}>
							{title}
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: "lightgray",
								fontFamily: "Poppins-Regular",
							}}>
							{username}
						</Text>
					</View>
				</View>
				<View style={{ paddingTop: 4 }}>
					<Image
						source={icons.menu}
						style={{ width: 20, height: 20 }}
						resizeMode='contain'
					/>
				</View>
			</View>
			{play ? (
				<Video
					source={{ uri: video }}
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
					style={styles.thumbnail}
					activeOpacity={0.7}
					onPress={() => setPlay(true)}>
					<Image
						source={{ uri: thumbnail }}
						style={styles.image2}
						resizeMode='cover'
					/>
					<Image
						source={icons.play}
						style={{ width: 48, height: 48, position: "absolute" }}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default VideoCard;

const styles = StyleSheet.create({
	viewContainer1: {
		flexDirection: "column",
		alignItems: "center",
		paddingHorizontal: 16,
		marginBottom: 56,
	},
	viewContainer2: {
		flexDirection: "row",
		gap: 12,
		alignItems: "flex-start",
	},
	viewContainer3: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		flex: 1,
	},
	viewContainer4: {
		width: 46,
		height: 46,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#FFA001",
		justifyContent: "center",
		alignItems: "center",
		padding: 2,
	},
	viewContainer5: {
		justifyContent: "center",
		flex: 1,
		marginLeft: 12,
		rowGap: 4,
	},
	image1: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
	},
	image2: {
		width: "100%",
		height: "100%",
		borderRadius: 12,
		marginTop: 12,
	},
	thumbnail: {
		width: "100%",
		height: 240,
		borderRadius: 12,
		marginTop: 12,
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	video: {
		width: "100%",
		height: 240,
		borderRadius: 12,
		marginTop: 12,
	},
});
