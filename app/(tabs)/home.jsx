import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
const Home = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#161622" }}>
			<FlatList
				data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
				keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
				renderItem={({ item }) => (
					<View>
						<Text style={{ color: "white" }}>{item.id}</Text>
					</View>
				)}
				ListHeaderComponent={() => (
					<View
						style={{
							marginVertical: 24,
							paddingHorizontal: 16,
							marginTop: 24,
						}}>
						<View
							style={{
								justifyContent: "space-between",
								alignItems: "flex-start",
								flexDirection: "row",
								marginBottom: 24,
							}}>
							<View>
								<Text
									style={{
										fontFamily: "Poppins-Medium",
										color: "white",
										fontSize: 14,
									}}>
									Welcome Back
								</Text>
								<Text
									style={{
										fontFamily: "Poppins-SemiBold",
										fontSize: 24,
										color: "white",
									}}>
									Sambit
								</Text>
							</View>
							<View style={{ marginTop: 6 }}>
								<Image
									source={images.logoSmall}
									style={{ width: 36, height: 40 }}
									resizeMode='contain'
								/>
							</View>
						</View>
						<SearchInput />
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
