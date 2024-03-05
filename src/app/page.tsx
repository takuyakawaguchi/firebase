
'use client'
import React from 'react';
import Firebase from './components/signup';
import SwrComponent from './components/fetch';


export default function Page() {
  return (
    <div>
      <Firebase /> 
      <SwrComponent />
    </div>
  );
}