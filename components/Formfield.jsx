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
const FormField = ({
	title,
	value,
	placeholder,
	otherStyles,
	handleChangeText,
	...props
}) => {
	const [showPassword, setshowPassword] = useState(false);
	return (
		<View style={[styles.fieldContainer, otherStyles]}>
			<Text style={styles.label}>{title}</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.textInput}
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7b7b8b'
					onChangeText={handleChangeText}
					secureTextEntry={title === "Password" && !showPassword}
				/>
				{title === "Password" && (
					<TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
						<Image
							source={!showPassword ? icons.eye : icons.eyeHide}
							style={styles.eye}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormField;

const styles = StyleSheet.create({
	fieldContainer: {
		width: "100%",
	},
	label: {
		fontSize: 16,
		color: "white",
		fontFamily: "Poppins-Medium",
		marginBottom: 8,
	},
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
		flex: 1,
		color: "white",
		fontFamily: "Poppins-SemiBold",
		fontSize: 16,
	},
	eye: {
		width: 24,
		height: 24,
	},
});
