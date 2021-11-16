import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted successfully');
    setEmail('');
    setPassword('');
  };
  return (
    <div className='sign-in'>
      <h2> I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='Email'
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <label> Email </label>

        <FormInput
          name='password'
          type='password'
          value={password}
          label='Password'
          handleChange={(e) => setPassword(e.target.value)}
          required
        />

        <CustomButton type='submit'> Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
