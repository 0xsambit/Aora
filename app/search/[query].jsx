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
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
const Search = () => {
	const query = useLocalSearchParams();
	const { data: posts, refetch } = useAppwrite(searchPosts(query));

	useEffect(() => {
		refetch();
	}, [query]);

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
						}}>
						<Text
							style={{
								fontFamily: "Poppins-Medium",
								color: "white",
								fontSize: 14,
							}}>
							Search Results
						</Text>
						<Text
							style={{
								fontFamily: "Poppins-SemiBold",
								fontSize: 24,
								color: "white",
							}}>
							{query}
						</Text>
						<SearchInput initialQuery={query} />
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title='No videos found'
						subtitle='Be the first one to create a video'
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default Search;

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
