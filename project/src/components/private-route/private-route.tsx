import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../constants';
import PrivateRouteProps from '../../types/private-route-props';

function PrivateRoute(props : PrivateRouteProps){
  const { authorisationStatus, children } = props;

  return authorisationStatus === AuthorisationStatus.Auth ? children : <Navigate to={AppRoute.SignIn}/>;
}

export default PrivateRoute;
