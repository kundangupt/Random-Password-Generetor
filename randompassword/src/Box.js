import React, { useState } from 'react';
import './index.css';

export default function Box() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let generatedPassword = '';
    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(char);
    }
    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="container">
      <h2>Random Password Generator</h2>
      <input
        type="text"
        readOnly
        disabled
        placeholder="Password"
        value={password}
      />
      <div className="btns">
        <button  onClick={generatePassword}>Generate Password</button>
        <button onClick={copyPassword}>Copy Password</button>
      </div>
      </div>
    </>
  );
}
