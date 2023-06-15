import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. By accessing and using our services, you agree to be bound by these terms and conditions.

  2. Changes to Terms
  We reserve the right to modify these terms and conditions at any time. Your continued use of our services constitutes your acceptance of any changes.

  3. Privacy Policy
  Our privacy policy, which sets out how we will use your information, can be found at [Privacy Policy Link]. By using our services, you consent to the processing of your personal data as described in our privacy policy.

  4. Prohibited Uses
  You may not use our services for any unlawful or prohibited purpose, including but not limited to:
  - Engaging in any activity that violates any law, regulation, or governmental order;
  - Transmitting any material that is defamatory, offensive, or otherwise objectionable;
  - Interfering with the proper functioning of our services or any other user's use of our services.

  5. Intellectual Property
  All content, including but not limited to text, images, graphics, and software, is the property of our company or its content suppliers and is protected by international copyright laws.

  6. Limitation of Liability
  In no event shall our company or its affiliates be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising out of the use or inability to use our services.

  7. Governing Law
  These terms and conditions shall be governed by and construed in accordance with the laws of [Country]. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [Country].
  `;
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E88E5'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF'
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333'
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#CCCCCC'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF'
  }
});
export default TermsAndConditionsScreen;