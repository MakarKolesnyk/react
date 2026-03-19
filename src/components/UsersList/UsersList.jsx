import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../store/UsersSlice";

const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch]);
  const showUser = (user)=><li key={user.id}>{user.name}</li>
  if(isLoading)return <p>Loading...</p>
  if(error)return <p>error</p>
  return <ul>
    {users.map(showUser)}
  </ul>;
};

export default UsersList;
