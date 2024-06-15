'use client';

import React, { useEffect, useState } from 'react';

const NameUser = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    // Akses localStorage hanya di sisi klien
    const dataStorage = localStorage.getItem("tokenAuth");
    if (dataStorage) {
      const parsedData = JSON.parse(dataStorage);
      if (parsedData?.name) {
        setName(parsedData.name);
      }
    }
  }, []);

  if (name) {
    return (
      <div className='py-6'>Welcome, {name}</div>
    );
  } else {
    return null;
  }
};

export default NameUser;
