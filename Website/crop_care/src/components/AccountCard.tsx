import React, { useState } from 'react';

const AccountCard = (name: string) => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <p className='text-md'>{name}</p>
      <input type="text" value={value} onChange={handleChange} />
      <p></p>
    </div>
  );
}

export default AccountCard


