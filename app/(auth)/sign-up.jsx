import { ScrollView, StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/Formfield";
import CustomButton from "../../components/button";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
	const { setUser, setIsLoggedIn } = useGlobalContext();

	const [isSubmitting, setisSubmitting] = useState(false);

	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
	});

	const submit = async () => {
		if (!form.username || !form.email || !form.password) {
			Alert.alert("Error", "Please fill in all the fields");
			return;
		}

		setisSubmitting(true);
		try {
			const result = await createUser(form.email, form.password, form.username);
			setUser(result);
			setIsLoggedIn(true);
			router.replace("/home");
		} catch (error) {
			Alert.alert("Error", error.message);
			console.log("Sign-up error:", error.message);
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
					<Text style={styles.title}>Sign Up to Aora</Text>
					<FormField
						title='Username'
						value={form.username}
						handleChangeText={(e) => setForm({ ...form, username: e })}
						otherStyles={{ marginTop: 35 }}
					/>
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
						title='Sign Up'
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
							Have an account already?{" "}
						</Text>
						<Link
							href='/sign-in'
							style={{
								color: "#FF9C01",
								fontFamily: "Poppins-SemiBold",
								fontSize: 18,
							}}>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;

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
