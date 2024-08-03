import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ color, icon, name, focused }) => {
	return (
		<View style={styles.container}>
			<Image
				source={icon}
				resizeMode='contain'
				style={[styles.imageContainer, { tintColor: color }]}
			/>
			<Text
				style={
					([styles.text, focused && styles.textFocused], { color: color })
				}>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#CDCDE0",
				tabBarStyle: {
					backgroundColor: "#161622",
					borderTopWidth: 1,
					borderTopColor: "#232533",
					height: 80,
				},
			}}>
			<Tabs.Screen
				name='home'
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon={icons.home}
							name='Home'
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='bookmark'
				options={{
					title: "Bookmark",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon={icons.bookmark}
							name='Bookmark'
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='create'
				options={{
					title: "Create",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon={icons.plus}
							name='Create'
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							icon={icons.profile}
							name='Profile'
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	},
	imageContainer: {
		width: 20,
		height: 20,
	},
	text: {
		fontSize: 10,
		fontFamily: "Poppins-Regular",
	},
	textFocused: {
		fontFamily: "Poppins-SemiBold",
	},
});
