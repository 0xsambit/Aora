import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const VideoCard = ({
	video: {
		title,
		thumbnail,
		video,
		creator: { avatar },
	},
}) => {
	return (
		<View style={styles.viewContainer1}>
			<View style={styles.viewContainer2}>
				<View style={styles.viewContainer3}>
					<View style={styles.viewContainer4}>
						<Image source={{ uri: avatar }} />
					</View>
				</View>
			</View>
			<Text style={{ fontSize: 20, color: "white" }}>{title}</Text>
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
});
