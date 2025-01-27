import { useState } from 'react';

export default function Form() {

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  // const [reset, setResetSection] = useState({firstName: '', lastName: ''})  
  let fName = '';
  let lName = '';

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    fName = e.target.value;
    setFName(fName);
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    lName = e.target.value;
    setLName(lName);
  }

  function handleReset() {
    setFName('');
    setLName('');
    // setResetSection({firstName:'', lastName: ''})
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
