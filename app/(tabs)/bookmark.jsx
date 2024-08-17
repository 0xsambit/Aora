import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
	return (
		<SafeAreaView style={styles.viewContainer}>
			<Text style={styles.text}>Bookmark</Text>
		</SafeAreaView>
	);
};

export default Bookmark;

const styles = StyleSheet.create({
	viewContainer: {
		paddingHorizontal: 16,
		marginVertical: 24,
		backgroundColor: "#161622",
		height: "100%",
	},
	text: {
		fontSize: 24,
		color: "white",
		fontFamily: "Poppins-SemiBold",
	},
});
