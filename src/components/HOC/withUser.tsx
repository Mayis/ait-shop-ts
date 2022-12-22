import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { userSelector } from '../../redux/slices/userSlice';

export default function withUser(OriginalComponent: React.FC) {
  return function ComponentWithUser() {
    const user = useSelector(userSelector);

    const navigate = useNavigate();
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
      if (!user) navigate('/auth/login');
      setIsRendered(true);
    }, [user, navigate]);

    if (!isRendered || !user) return <p>Loading...</p>;

    return <OriginalComponent />;
  };
}
