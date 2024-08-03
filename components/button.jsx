import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			style={[styles.container, containerStyles, isLoading && { opacity: 0.5 }]}
			disabled={isLoading}>
			<Text style={[styles.text, textStyles]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FF9C01",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		minHeight: 60,
		width: "100%",
	},
	text: {
		fontFamily: "Poppins-SemiBold",
		fontSize: 18,
		color: "#161622",
	},
});
