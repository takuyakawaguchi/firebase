// app/page.tsx
'use client'
import React from 'react';
import SignupForm from './components/signup';
import RepoComponent from './components/fetch';


export default function Page() {
 
  
  return (
    <div>
      { <SignupForm /> }
      <RepoComponent />
    </div>
  );
}