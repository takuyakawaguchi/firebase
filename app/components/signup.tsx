'use client';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import auth from '../firebase/initializeApp'

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); 
        setEmail(''); 
        setPassword(''); 
        setError(''); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
      />
      <br />
      <button onClick={handleSignUp}>サインアップ</button>
      <br />
      <button onClick={handleSignIn}>ログイン</button>
      <br />
      <button onClick={handleSignOut}>ログアウト</button>
      {user && (
        <div>
          <p>現在ログイン中</p>
          <p>メールアドレス: {user.email}</p>
        </div>
      )}
      {error && <p>エラー: {error}</p>}
    </div>
  );
}