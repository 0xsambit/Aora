import { ScrollView, StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/Formfield";
import CustomButton from "../../components/button";
import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
const SignIn = () => {
	const { setUser, setIsLoggedIn } = useGlobalContext();

	const [isSubmitting, setisSubmitting] = useState(false);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const submit = async () => {
		if (!form.email || !form.password) {
			Alert.alert("Error", "Please fill in all the fields");
			return;
		}

		setisSubmitting(true);
		try {
			await signIn(form.email, form.password);
			const result = await getCurrentUser();
			setUser(result);
			setIsLoggedIn(true);
			router.replace("/home");
		} catch (error) {
			Alert.alert("Error", error.message);
			console.log("Sign-in error:", error.message);
		} finally {
			setisSubmitting(false);
		}
	};
	return (
		<SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
			<ScrollView>
				<View style={styles.viewContainer}>
					<Image
						source={images.logo}
						resizeMode='contain'
						style={{ width: 115, height: 35 }}
					/>
					<Text style={styles.title}>Log in to Aora</Text>
					<FormField
						title='Email'
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles={{ marginTop: 28 }}
						keyboardType='email-address'
					/>
					<FormField
						title='Password'
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles={{ marginTop: 28 }}
					/>

					<CustomButton
						title='Sign In'
						handlePress={submit}
						containerStyles={{ marginTop: 28 }}
						isLoading={isSubmitting}
					/>
					<View
						style={{
							justifyContent: "center",
							paddingTop: 20,
							flexDirection: "row",
							gap: 2,
						}}>
						<Text
							style={{
								color: "white",
								fontFamily: "Poppins-Regular",
								fontSize: 18,
							}}>
							Don't have an account ?{" "}
						</Text>
						<Link
							href='/sign-up'
							style={{
								color: "#FF9C01",
								fontFamily: "Poppins-SemiBold",
								fontSize: 18,
							}}>
							Sign up
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	viewContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 16,
		marginVertical: 24,
		height: "100%",
	},
	title: {
		color: "white",
		fontSize: 24,
		fontFamily: "Poppins-SemiBold",
		marginTop: 40,
	},
});
