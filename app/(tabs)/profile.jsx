import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	View,
	Image,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, InfoBox, VideoCard } from "../../components";

const Profile = () => {
	const { user, setUser, setIsLogged } = useGlobalContext();
	const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

	const logout = async () => {
		await signOut();
		setUser(null);
		setIsLogged(false);

		router.replace("/sign-in");
	};

	return (
		<SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
			<FlatList
				data={posts}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => (
					<VideoCard
						title={item.title}
						thumbnail={item.thumbnail}
						video={item.video}
						creator={item.creator.username}
						avatar={item.creator.avatar}
					/>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title='No Videos Found'
						subtitle='No videos found for this profile'
					/>
				)}
				ListHeaderComponent={() => (
					<View style={styles.viewContainer1}>
						<TouchableOpacity
							onPress={logout}
							style={{
								width: "100%",
								display: "flex",
								alignItems: "flex-end",
								marginBottom: 40,
							}}>
							<Image
								source={icons.logout}
								resizeMode='contain'
								className='w-6 h-6'
								style={{ width: 24, height: 24 }}
							/>
						</TouchableOpacity>

						<View style={styles.viewContainer2}>
							<Image
								source={{ uri: user?.avatar }}
								style={{ width: "90%", height: "90%", borderRadius: 8 }}
								resizeMode='cover'
							/>
						</View>

						<InfoBox
							title={user?.username}
							containerStyles='mt-5'
							titleStyles='text-lg'
						/>

						<View className='mt-5 flex flex-row'>
							<InfoBox
								title={posts.length || 0}
								subtitle='Posts'
								titleStyles='text-xl'
								containerStyles='mr-10'
							/>
							<InfoBox
								title='1.2k'
								subtitle='Followers'
								titleStyles='text-xl'
							/>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	viewContainer1: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
		marginBottom: 48,
		paddingHorizontal: 16,
	},
	viewContainer2: {
		width: 64,
		height: 64,
		borderWidth: 1,
		borderColor: "#FF9C01",
		borderRadius: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
