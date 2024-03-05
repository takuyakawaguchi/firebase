'use client';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import auth from '../firebase/initializeApp'
import '../../stories/signup.css'

export default function firebase() {
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
      <div className="form-container">
        <input
          className="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <input
          className="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
        <button className="button" onClick={handleSignUp}>サインアップ</button>
        <button className="button" onClick={handleSignIn}>ログイン</button>
        <button className="button" onClick={handleSignOut}>ログアウト</button>

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