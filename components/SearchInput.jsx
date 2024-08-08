import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
const SearchInput = ({
	title,
	value,
	placeholder,
	otherStyles,
	handleChangeText,
	...props
}) => {
	const [showPassword, setshowPassword] = useState(false);
	return (
		<View style={styles.inputView}>
			<TextInput
				style={styles.textInput}
				value={value}
				placeholder='Search for a video topic'
				placeholderTextColor='#7b7b8b'
				onChangeText={handleChangeText}
				secureTextEntry={title === "Password" && !showPassword}
			/>
			<TouchableOpacity>
				<Image
					source={icons.search}
					style={{ width: 24, height: 24 }}
					resizeMode='contain'
				/>
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;

const styles = StyleSheet.create({
	inputView: {
		borderWidth: 2,
		borderColor: "black",
		width: "100%",
		height: 64,
		backgroundColor: "black",
		paddingHorizontal: 16,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	textInput: {
		fontSize: 16,
		marginTop: 2,
		color: "white",
		flex: 1,
		fontFamily: "Poppins-Regular",
	},
	eye: {
		width: 24,
		height: 24,
	},
});
