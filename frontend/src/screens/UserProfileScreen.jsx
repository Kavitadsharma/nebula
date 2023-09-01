// src/screens/UserProfileScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const UserProfileScreen = ({ navigation }) => {
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");
   const [height, setHeight] = useState("");
   const [weight, setWeight] = useState("");
   const [email, setEmail] = useState("");
   const [contactNumber, setContactNumber] = useState("");

  // const handleSaveProfile = () => {
  //   // You can add logic here to save the user profile data
  //   navigation.navigate("GoalSetting"); // Navigate to the next screen
  // };
  const handleSaveProfile = () => {
  if (name && age && gender && height && weight && email && contactNumber) {
    // Assuming you have a function to save the profile data to a database or storage
    saveUserProfileToDatabase({
      name,
      age,
      gender,
      height,
      weight,
      email,
      contactNumber,
    });

    navigation.navigate("GoalSetting"); // Navigate to the next screen
  } else {
    // Display an error message or alert if any required field is missing
    alert("Please fill out all fields before saving.");
  }
};

  return (
    <View>
    <Text style={styles.heading}><h1>Fitness Freak</h1></Text>
   
    <View style={styles.container}>
      {/* <Text style={styles.title}>User Profile</Text> */}
      <h2>USER INFORMATION</h2>
   
      <h3>Name</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setName}
      />
      <h3>Age</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <h3>Gender</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={gender}
        onChangeText={setGender}

      />
      <h3>Height</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <h3>Weight</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <h3>Email</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <h3>Contact</h3>
      <TextInput
        style={styles.input}
        placeholder=""
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
      />
    
          <Text style={styles.saveButtonText}>Save Profile</Text>
          
          </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Optional: You can adjust the font weight
    marginBottom: 10, // Optional: Add margin to separate it from the container
    textAlign: 'center', 
    paddingTop:"150px"// Optional: Center the text
  },
  
  container: {
    width: "700px",
    height: "1000px",
    margin: "auto",
    padding: "20px",
    paddingTop:"40px",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "skyblue",
    shadowColor: "rgba(0, 0, 0, 0.35)", // Shadow color
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 15, // Shadow radius
    elevation: 5, // Elevation (for Android)
  },

  title: {
    fontSize: "40px",
    marginBottom: 20,
  },
  input: {
    width: "70%",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  // saveButton: {
  //   backgroundColor: "green", // Background color for the button
  //   padding: 15, // Adjust padding to increase size
  //   borderRadius: 10, // Rounded corners
  //   alignItems: "center", // Center content horizontally
  // },
  saveButtonText: {
    width:"250px",
    backgroundColor: "white", // Text color
    fontSize: 28, // Adjust the font size
    fontWeight: "bold", 
    borderColor: "black",
    borderRadius: 5,// Optional: Set the font weight
  },

})

export default UserProfileScreen;
