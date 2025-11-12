import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView, Linking, Image } from "react-native";
import Button from "../components/Button";

export default function ProfileScreen({ navigation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Kiran Regmi",
    email: "regmi7943@gmail.com",
    github: "github.com/kiran987657",
    phone: "+977 9800000000",
    dob: "18 August 2005",
    bio: "Computer Information System student skilled in web and mobile development",
    education: "Boston International College, Bachelor in Computer Information System",
    skills: "HTML, CSS, JavaScript, PHP, React Native, Node.js, MySQL, Firebase",
  });

  const [editData, setEditData] = useState(userInfo);

  const handleEditPress = () => {
    if (isEditing) {
      // Save changes
      setUserInfo(editData);
      setIsEditing(false);
      Alert.alert("Success", "Profile updated successfully!");
    } else {
      // Start editing
      setEditData(userInfo);
      setIsEditing(true);
    }
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          navigation.replace("Login");
        },
        style: "destructive",
      },
    ]);
  };

  const handleOpenGithub = () => {
    Linking.openURL(`https://${userInfo.github}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileHeader}>
        <Image
          source={require("../assets/profile.png")}
          style={styles.profileImage}
          defaultSource={require("../assets/icon.png")}
        />
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>
        <TouchableOpacity onPress={handleOpenGithub}>
          <Text style={styles.github}>📱 {userInfo.github}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        {isEditing ? (
          <>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.editInput}
                value={editData.name}
                onChangeText={(text) =>
                  setEditData({ ...editData, name: text })
                }
                placeholder="Enter name"
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.editInput}
                value={editData.email}
                onChangeText={(text) =>
                  setEditData({ ...editData, email: text })
                }
                placeholder="Enter email"
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>GitHub:</Text>
              <TextInput
                style={styles.editInput}
                value={editData.github}
                onChangeText={(text) =>
                  setEditData({ ...editData, github: text })
                }
                placeholder="Enter GitHub profile"
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Phone:</Text>
              <TextInput
                style={styles.editInput}
                value={editData.phone}
                onChangeText={(text) =>
                  setEditData({ ...editData, phone: text })
                }
                placeholder="Enter phone"
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Date of Birth:</Text>
              <TextInput
                style={styles.editInput}
                value={editData.dob}
                onChangeText={(text) =>
                  setEditData({ ...editData, dob: text })
                }
                placeholder="Enter DOB"
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Bio:</Text>
              <TextInput
                style={[styles.editInput, styles.bioInput]}
                value={editData.bio}
                onChangeText={(text) =>
                  setEditData({ ...editData, bio: text })
                }
                placeholder="Enter bio"
                multiline
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Education:</Text>
              <TextInput
                style={[styles.editInput, styles.bioInput]}
                value={editData.education}
                onChangeText={(text) =>
                  setEditData({ ...editData, education: text })
                }
                placeholder="Enter education"
                multiline
              />
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Skills:</Text>
              <TextInput
                style={[styles.editInput, styles.bioInput]}
                value={editData.skills}
                onChangeText={(text) =>
                  setEditData({ ...editData, skills: text })
                }
                placeholder="Enter skills"
                multiline
              />
            </View>
          </>
        ) : (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Personal Information</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>📅 Date of Birth:</Text>
              <Text style={styles.value}>{userInfo.dob}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>📞 Phone:</Text>
              <Text style={styles.value}>{userInfo.phone}</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>About</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.value}>{userInfo.bio}</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Education</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.value}>{userInfo.education}</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Technical Skills</Text>
            </View>
            <View style={styles.skillsContainer}>
              {userInfo.skills.split(",").map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill.trim()}</Text>
                </View>
              ))}
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Featured Projects</Text>
            </View>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>🛍️ Made in Nepal</Text>
              <Text style={styles.projectDesc}>
                Responsive e-commerce website for local products with secure payment integration
              </Text>
            </View>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>🚗 Yatra – Vehicle Rental App</Text>
              <Text style={styles.projectDesc}>
                Mobile app with real-time availability updates using Firebase
              </Text>
            </View>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>🚙 Zippy – Vehicle Pooling App</Text>
              <Text style={styles.projectDesc}>
                Platform for sharing rides with user authentication and ride-matching
              </Text>
            </View>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>🗣️ SpeakUp – English Booster</Text>
              <Text style={styles.projectDesc}>
                Interactive app for practicing English with progress tracking
              </Text>
            </View>
          </>
        )}
      </View>

      <View style={styles.actionsSection}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.editButton,
              isEditing && styles.saveButton,
            ]}
            onPress={handleEditPress}
          >
            <Text style={styles.editButtonText}>
              {isEditing ? "Save" : "Edit Profile"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#fff",
    paddingVertical: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    backgroundColor: "#e0e0e0",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  github: {
    fontSize: 13,
    color: "#007AFF",
    marginTop: 5,
    fontWeight: "600",
  },
  infoSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  infoItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 5,
  },
  value: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#E8F4F8",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  skillText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#007AFF",
  },
  projectCard: {
    backgroundColor: "#F8F8FF",
    borderLeftWidth: 4,
    borderLeftColor: "#34C759",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  projectDesc: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
  editInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: "#000",
  },
  bioInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  actionsSection: {
    marginTop: "auto",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: "#34C759",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#007AFF",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
