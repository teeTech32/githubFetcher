import UserRepoItems from "./UserRepoItems"
import PropTypes  from "prop-types"
function UserRepoList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="card-title my-4 font-bold text-3xl">
          Latest Repositories
        </h2>
        {repos.map((repo)=><UserRepoItems key={repo.id} repo={repo}/> )}

      </div>
    </div>
  )
}

UserRepoList.prototypes = {
  repos:PropTypes.array.isRequired
}
export default UserRepoList