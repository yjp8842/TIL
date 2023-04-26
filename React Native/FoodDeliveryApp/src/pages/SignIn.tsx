import React, { useCallback, useRef, useState } from 'react';
import {StyleSheet, Alert, Pressable, Text, TextInput, View} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕');
  }, [])

  const canGoNext = email && password;
  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder='이메일을 입력하세요.' 
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill='yes'
          autoComplete='email'
          textContentType='emailAddress'
          returnKeyType='next'
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false} // 키보드 내려가는거 방지
          ref={emailRef}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput 
          style={styles.textInput}
          placeholder='비밀번호를 입력하세요.' 
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
          importantForAutofill='yes'
          autoComplete='password'
          textContentType='password'
          onSubmitEditing={onSubmit}
          ref={passwordRef}
        />
      </View>
      <View style={styles.ButtonZone}>
        <Pressable 
          onPress={onSubmit} 
          style={
            !canGoNext 
              ? styles.loginButton 
              // : [styles.loginButton, styles.loginButtonActive]
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          } 
          disabled={!canGoNext}
        >
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  ButtonZone: {
    alignItems: 'center',
  }
});

export default SignIn;