import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	return (
		<SafeAreaView>
			<FlatList
				data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
				keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
				renderItem={({ item }) => (
					<View>
						<Text>{item.id}</Text>
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
								<Text>Welcome Back</Text>
								<Text>Sambit</Text>
							</View>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
