import { Link } from 'react-router-dom';
import { AppLink } from '../../constants';
import UserBlockProps from '../../types/props/user-block-props';

function UserBlock({user} : UserBlockProps) : JSX.Element{

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={`/${AppLink.Mylist}`}>
          <div className="user-block__avatar">
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserBlock;
