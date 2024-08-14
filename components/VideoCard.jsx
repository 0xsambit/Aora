import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../constants";

const VideoCard = ({
	video: {
		title,
		thumbnail,
		video,
		creator: { username, avatar },
	},
}) => {
	return (
		<View style={styles.viewContainer1}>
			<View style={styles.viewContainer2}>
				<View style={styles.viewContainer3}>
					<View style={styles.viewContainer4}>
						<Image
							source={{ uri: avatar }}
							style={styles.image}
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
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
	},
});
