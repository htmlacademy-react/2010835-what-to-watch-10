import { AuthorisationStatus } from '../constants';

type PrivateRouteProps = {
  children: JSX.Element,
  authorisationStatus: AuthorisationStatus,
}

export default PrivateRouteProps;
