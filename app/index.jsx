import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { images } from "../constants";
import CustomButton from "../components/button";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
	const { isLoading, isLoggedIn } = useGlobalContext();
	if (!!isLoading && isLoggedIn) return <Redirect href='/home' />;
	return (
		<SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View style={styles.viewContainer}>
					<Image
						source={images.logo}
						style={{ width: 130, height: 84 }}
						resizeMode='contain'
					/>
					<Image
						source={images.cards}
						style={{ width: "100%", height: 300 }}
						resizeMode='contain'
					/>
					<View style={{ position: "relative" }}>
						<Text
							style={{
								fontSize: 30,
								fontWeight: "bold",
								color: "white",
								textAlign: "center",
							}}>
							Discover Endless Possibilities with{" "}
							<Text style={{ color: "#FF9C01" }}>Aora</Text>
						</Text>
						<Image source={images.path} style={styles.path} />
					</View>
					<Text
						style={{
							color: "white",
							fontFamily: "Poppins-Regular",
							textAlign: "center",
							marginTop: 7,
						}}>
						Where creativity meets innovation: embark on a journey of limitless
						exploration with Aora
					</Text>
					<CustomButton
						title='Continue with Email'
						handlePress={() => router.push("/sign-in")}
						containerStyles={{ marginTop: 30 }}
					/>
				</View>
			</ScrollView>
			<StatusBar backgroundColor='#161622' style='light' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		width: "100%",
		height: "90%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	path: {
		width: 85,
		height: 15,
		position: "absolute",
		bottom: -5,
		right: -8,
	},
});
