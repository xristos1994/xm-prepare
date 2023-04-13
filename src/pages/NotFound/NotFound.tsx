import { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const NotFound: FC = () => {
  return <Navigate to="/" replace/>;
}
