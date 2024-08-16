import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";
const SearchInput = ({ initialQuery }) => {
	const pathname = usePathname();
	const [query, setQuery] = useState(initialQuery || "");
	return (
		<View style={styles.inputView}>
			<TextInput
				style={styles.textInput}
				value={query}
				placeholder='Search for a video topic'
				placeholderTextColor='#CDCDE0'
				onChangeText={(e) => setQuery(e)}
			/>
			<TouchableOpacity
				onPress={() => {
					if (!query) {
						return Alert.alert(
							"Missing query",
							"Please input something to search results across database"
						);
					}
					if (pathname.startsWith("/search")) router.setParams({ query });
					else router.push(`/search/${query}`);
				}}>
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
