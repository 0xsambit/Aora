import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./button";
import { router } from "expo-router";
const EmptyState = ({ title, subtitle }) => {
	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 16,
			}}>
			<Image
				source={images.empty}
				style={{ width: 270, height: 215 }}
				resizeMode='contain'
			/>
			<Text
				style={{
					fontFamily: "Poppins-SemiBold",
					fontSize: 20,
					color: "white",
					textAlign: "center",
				}}>
				{title}
			</Text>
			<Text
				style={{
					fontFamily: "Poppins-Medium",
					color: "white",
					fontSize: 14,
				}}>
				{subtitle}
			</Text>
			<CustomButton
				title='Create Video'
				handlePress={() => router.push("/create")}
				containerStyles={styles.button}
			/>
		</View>
	);
};

export default EmptyState;

const styles = StyleSheet.create({
	button: {
		width: "100%",
		marginVertical: 20,
	},
});
