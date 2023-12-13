import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {colors, fontType} from '../../assets/theme';
import {Eye, EyeSlash} from 'iconsax-react-native';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSignupDisabled, setSignupDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [paddingVertical, setPaddingVertical] = useState(60);
  const navigation = useNavigation();

  const handleRegister = async () => {
    let errorMessage = '';

    if (password !== confirmPassword) {
      errorMessage = 'Password and confirmation password do not match.';
    } else if (password.length < 8) {
      errorMessage = 'Password length must be at least 8 characters.';
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
      if (!passwordRegex.test(password)) {
        errorMessage =
          'Password must contain a combination of letters and numbers.';
      }
    }

    if (errorMessage) {
      Alert.alert('Error', errorMessage);
      return;
    }

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({
          fullName,
          email,
          photoUrl: `https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80`,
          followersCount: 0,
          followingCount: 0,
          totalPost: 0,
          createdAt: new Date(),
        })
        .then(() => {
          console.log('User added!');
        });
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      console.log('Registration Error:', error);
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email is already registered!';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Weak password';
      }
      Alert.alert('Error', errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const updateSignupButtonStatus = () => {
    if (
      fullName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim()
    ) {
      setSignupDisabled(false);
    } else {
      setSignupDisabled(true);
    }
  };

  useEffect(() => {
    updateSignupButtonStatus();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setPaddingVertical(0);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setPaddingVertical(60);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [fullName, email, password, confirmPassword]);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {paddingVertical}]}>
          <View style={styles.topHalfCircle} />
          <View>
            <Text style={styles.header}>Sign up</Text>
            <View style={styles.line} />
            <Text style={styles.caption}>
              Looks like you don't have an account. {'\n'}Let's create a new
              account
            </Text>
            <View style={styles.form}>
              <View>
                <Text style={textinput.label}>Full Name</Text>
                <View style={textinput.container}>
                  <TextInput
                    placeholder="Full Name"
                    placeholderTextColor={colors.white(0.6)}
                    value={fullName}
                    onChangeText={text => {
                      setFullName(text);
                      updateSignupButtonStatus();
                    }}
                    style={textinput.text}
                  />
                </View>
              </View>
              <View>
                <Text style={textinput.label}>Email</Text>
                <View style={textinput.container}>
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor={colors.white(0.6)}
                    value={email}
                    onChangeText={text => {
                      setEmail(text);
                      updateSignupButtonStatus();
                    }}
                    inputMode="email"
                    keyboardType="email-address"
                    style={textinput.text}
                  />
                </View>
              </View>
              <View>
                <Text style={textinput.label}>Password</Text>
                <View
                  style={[
                    textinput.container,
                    {
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 10,
                    },
                  ]}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={colors.white(0.6)}
                    value={password}
                    onChangeText={text => {
                      setPassword(text);
                      updateSignupButtonStatus();
                    }}
                    secureTextEntry={!passwordVisible}
                    style={[textinput.text, {flex: 1}]}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    {passwordVisible ? (
                      <EyeSlash
                        variant="Linear"
                        color={colors.white(0.6)}
                        size={20}
                      />
                    ) : (
                      <Eye
                        variant="Linear"
                        color={colors.white(0.6)}
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={textinput.label}>Confirm Password</Text>
                <View
                  style={[
                    textinput.container,
                    {
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 10,
                    },
                  ]}>
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.white(0.6)}
                    value={confirmPassword}
                    onChangeText={text => {
                      setConfirmPassword(text);
                      updateSignupButtonStatus();
                    }}
                    secureTextEntry={!confirmPasswordVisible}
                    style={[textinput.text, {flex: 1}]}
                  />
                  <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    {confirmPasswordVisible ? (
                      <EyeSlash
                        variant="Linear"
                        color={colors.white(0.6)}
                        size={20}
                      />
                    ) : (
                      <Eye
                        variant="Linear"
                        color={colors.white(0.6)}
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{gap: 10}}>
            <TouchableHighlight
              style={[
                button.container,
                {
                  backgroundColor: isSignupDisabled ? '#A8DF8E' : '#A8DF8E',
                },
              ]}
              underlayColor={colors.blue(0.9)}
              onPress={handleRegister}
              disabled={isSignupDisabled}>
              {loading ? (
                <ActivityIndicator color={colors.white()} />
              ) : (
                <Text style={button.label}>SIGN UP</Text>
              )}
            </TouchableHighlight>
            <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
              <Text style={[button.label, {color: colors.white()}]}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[button.label, {color: '#A8DF8E'}]}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121111',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 32,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
    marginBottom: 5,
  },
  caption: {
    fontFamily: fontType['Pjs-Regular'],
    color: colors.white(1),
    fontSize: 14,
    marginBottom: 30,
  },
  form: {
    gap: 20,
    // backgroundColor: 'rgba(33, 30, 30, 0.9)',
    borderRadius: 15,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#A8DF8E',
    width: 150,
    marginTop: 5,
    marginBottom: 5,
  },
  topHalfCircle: {
    width: '70%',
    height: 30,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: '#A8DF8E',
    position: 'absolute',
    top: 0,
    left: 80,
    zIndex: 1,
  },
});
const textinput = StyleSheet.create({
  label: {
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 14,
    color: colors.white(0.6),
    marginBottom: 5,
  },
  container: {
    backgroundColor: colors.grey(0.05),
    height: 52,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderBlockEndColor: '#A8DF8E',
    borderWidth: 1,
  },
  text: {
    paddingVertical: 0,
    color: colors.white(),
    fontFamily: fontType['Pjs-Regular'],
  },
});
const button = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  label: {
    color: colors.white(),
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
  },
});
