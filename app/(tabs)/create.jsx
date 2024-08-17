import { useState } from "react";
import { router } from "expo-router";
import { ResizeMode, Video } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	View,
	Text,
	Alert,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";

import { icons } from "../../constants";
import { createVideoPost } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";
const Create = () => {
	const { user } = useGlobalContext();
	const [uploading, setUploading] = useState(false);
	const [form, setForm] = useState({
		title: "",
		video: null,
		thumbnail: null,
		prompt: "",
	});

	const openPicker = async (selectType) => {
		const result = await DocumentPicker.getDocumentAsync({
			type:
				selectType === "image"
					? ["image/png", "image/jpg"]
					: ["video/mp4", "video/gif"],
		});

		if (!result.canceled) {
			if (selectType === "image") {
				setForm({
					...form,
					thumbnail: result.assets[0],
				});
			}

			if (selectType === "video") {
				setForm({
					...form,
					video: result.assets[0],
				});
			}
		} else {
			setTimeout(() => {
				Alert.alert("Document picked", JSON.stringify(result, null, 2));
			}, 100);
		}
	};

	const submit = async () => {
		if (
			(form.prompt === "") |
			(form.title === "") |
			!form.thumbnail |
			!form.video
		) {
			return Alert.alert("Please provide all fields");
		}

		setUploading(true);
		try {
			await createVideoPost({
				...form,
				userId: user.$id,
			});

			Alert.alert("Success", "Post uploaded successfully");
			router.push("/home");
		} catch (error) {
			Alert.alert("Error", error.message);
		} finally {
			setForm({
				title: "",
				video: null,
				thumbnail: null,
				prompt: "",
			});

			setUploading(false);
		}
	};

	return (
		<SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
			<ScrollView style={{ paddingHorizontal: 16, marginVertical: 24 }}>
				<Text
					style={{
						fontSize: 24,
						color: "white",
						fontFamily: "Poppins-SemiBold",
					}}>
					Upload Video
				</Text>

				<FormField
					title='Video Title'
					value={form.title}
					placeholder='Give your video a catchy title...'
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles={{ marginTop: 40 }}
				/>

				<View style={{ marginTop: 28 }}>
					<Text
						style={{
							fontSize: 16,
							color: "white",
							fontFamily: "Poppins-Medium",
						}}>
						Upload Video
					</Text>

					<TouchableOpacity onPress={() => openPicker("video")}>
						{form.video ? (
							<Video
								source={{ uri: form.video.uri }}
								style={{ width: "100%", height: 256, borderRadius: 16 }}
								useNativeControls
								resizeMode={ResizeMode.COVER}
								isLooping
							/>
						) : (
							<View style={styles.viewContainer1}>
								<View style={styles.viewContainer2}>
									<Image
										source={icons.upload}
										resizeMode='contain'
										alt='upload'
										style={{ width: "50%", height: "50%" }}
									/>
								</View>
							</View>
						)}
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 28 }}>
					<Text
						style={{
							fontSize: 16,
							color: "white",
							fontFamily: "Poppins-Medium",
						}}>
						Thumbnail Image
					</Text>

					<TouchableOpacity onPress={() => openPicker("image")}>
						{form.thumbnail ? (
							<Image
								source={{ uri: form.thumbnail.uri }}
								resizeMode='cover'
								style={{ width: "100%", height: 256, borderRadius: 16 }}
							/>
						) : (
							<View style={styles.viewContainer3}>
								<Image
									source={icons.upload}
									resizeMode='contain'
									alt='upload'
									style={{ width: 20, height: 20 }}
								/>
								<Text
									style={{
										fontSize: 20,
										color: "white",
										fontFamily: "Poppins-Medium",
									}}>
									Choose a file
								</Text>
							</View>
						)}
					</TouchableOpacity>
				</View>

				<FormField
					title='AI Prompt'
					value={form.prompt}
					placeholder='The AI prompt of your video....'
					handleChangeText={(e) => setForm({ ...form, prompt: e })}
					otherStyles={{ marginTop: 56 }}
				/>

				<CustomButton
					title='Submit & Publish'
					handlePress={submit}
					containerStyles={{ marginTop: 56 }}
					isLoading={uploading}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Create;

const styles = StyleSheet.create({
	viewContainer1: {
		width: "100%",
		height: 160,
		paddingHorizontal: 16,
		backgroundColor: "black",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
	viewContainer2: {
		width: 56,
		height: 56,
		borderWidth: 1,
		borderStyle: "dashed",
		borderColor: "#FF9001",
		justifyContent: "center",
		alignItems: "center",
	},
	viewContainer3: {
		width: "100%",
		height: 64,
		paddingHorizontal: 16,
		backgroundColor: "black",
		borderRadius: 16,
		borderWidth: 2,
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginLeft: 8,
	},
});
