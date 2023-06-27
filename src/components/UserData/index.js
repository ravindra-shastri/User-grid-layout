import UserDashBoard from '../Dashboard';
import Loader from '../Loader';

const UserData = (props) => {
  let data = props.data;
  let loading = props.loading;
  return (
    <div>
      {
        loading ? (
          <Loader />
        ) : (
          <div className="dashboard-container">
            {
              data.map((user) => <UserDashBoard userDetails={user} />)
            }
          </div>
        )
      }
    </div>
  )
}

export default UserData;
