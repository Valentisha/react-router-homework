import{useRouteMatch} from 'react-router-dom';
function Users() {
    let match = useRouteMatch();
  return (
    <> 
      <h1 className='style__users'>Users</h1>
      <ul>
          <li className='menu__user'><a href={`${match.url}/Ivanov`}>Ivanov</a></li> 
          <li className='menu__user'><a href="/users/Moskvitina">Moskvitina</a></li> 
      </ul>
    </>
  );
}

export default Users;