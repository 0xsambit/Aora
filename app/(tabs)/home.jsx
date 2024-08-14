import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	RefreshControl,
	Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
const Home = () => {
	const { data: posts, refetch } = useAppwrite(getAllPosts);
	const [refreshing, setRefreshing] = useState(false);
	const onRefresh = async () => {
		setRefreshing(true);
		await refetch();
		setRefreshing(false);
	};

	return (
		<SafeAreaView
			style={{ backgroundColor: "#161622", flex: 1, borderColor: "red" }}>
			<FlatList
				data={posts}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => <VideoCard video={item} />}
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
						<View style={styles.videos}>
							<Text style={styles.videoText}>Latest Videos</Text>
							{/* <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} /> */}
						</View>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title='No videos found'
						subtitle='Be the first one to create a video'
					/>
				)}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	videos: {
		width: "100%",
		flex: 1,
		paddingTop: 20,
		paddingBottom: 32,
	},
	videoText: {
		color: "white",
		fontSize: 18,
		fontFamily: "Poppins-Regular",
		marginBottom: 12,
	},
});
