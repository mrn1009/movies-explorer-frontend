import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component, loggedIn, ...props }) => {
  const { pathname } = useLocation();
  return loggedIn ? (<Component {...props} />) : (<Navigate to="/" state={{ backUrl: pathname }} replace />);
}

export default ProtectedRoute;