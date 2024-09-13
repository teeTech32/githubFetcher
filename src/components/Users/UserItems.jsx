import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function UserItems({user:{avatar_url, login}}) {
  return (
    <Link to={`/user/${login}`}>
      <div className="card shadow-md side compact bg-gray-500">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full shadow w-14 h-14">
                <img src={avatar_url} alt="profile" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title text-black font-bold text-2xl">{login}</h2>
            <h4 className="text- font-bold text-white">Visit Profile</h4> 
          </div>
        </div>
      </div>
    </Link>
  )
}

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItems