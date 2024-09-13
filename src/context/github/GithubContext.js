import { createContext,  useContext,  useReducer} from "react";
import githubReducer from "./GithubReducer";
import { Octokit } from "octokit";
import AlertContext from "../alert/AlertContext";

const githubContext = createContext()

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) =>{
  const initialState = {
    users: [],
    user:{},
    repos:[],
    loading:false,
    
  }
  const { alertUsers } = useContext(AlertContext)
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async(text)=>{
    try{
      setLoading()
      const octokit = new Octokit({
        auth: `${GITHUB_TOKEN}`
      })
      const response = await octokit.request(`GET /${text}`,
        {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }
      )
      const items = response.data
      dispatch(
        {
          Type: 'GET_USERS',
          payloader: items
        }
      )
      alertUsers('Successful', 'success')
      setStoploading() 
    }catch(error){
      if(error.response){
        alertUsers('Error Response', 'error')
        setStoploading() 
      }if(error.request){
        alertUsers('Error in Request', 'error')
        setStoploading() 
      }else{
        alertUsers('Something went wrong', 'error')
        setStoploading() 
      }
    }
  }
   
  const getUser = async(login) => {
    try{
      setLoading()
      const octokit = new Octokit({
        auth: `${GITHUB_TOKEN}`
      })
      const response = await octokit.request(`GET /users/${login}`, {
        login: 'USERNAME',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      const data = response.data
      dispatch(
        {
          Type: 'GET_USER',
          payloader: data
        }
      )
      alertUsers('Successful', 'success')
    }catch(error){
      if(error.response){
        alertUsers('Error in Response', 'error')
        window.location = '/Notfound'
      }if(error.request){
        alertUsers('Error in Request', 'error')
        window.location ='/Notfound'
      }else{
        alertUsers('Something went wrong', 'error')
      }
    }        
  }

  const getRepos = async(login)=>{
    try{
      setLoading()
      const octokit = new Octokit({
        auth: `${GITHUB_TOKEN}`
      }
    )
    const response = await octokit.request(`GET /users/${login}/repos`, {
        login: 'USERNAME',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    )
    const data = response.data
    dispatch(
        {
        Type: 'GET_REPOS',
        payloader: data
      }
    )
    }catch(error){
      if (error.response) {
         alertUsers('Error in Response', 'error')
      } if (error.request) {
        alertUsers('Error in Request', 'error')
      } else {
        alertUsers('Something went wrong ')
      }
    }
    
  }
   
  const setLoading = () => dispatch({
    Type: 'SET_LOADING'
  })

  const setStoploading = () => dispatch({
    Type: 'SET_STOPLOADING'
  })

  const deleteUsers = () => dispatch({
    Type:'DELETE_USERS'
  })
    
  return(
    <githubContext.Provider value={{
      users: state.users,
      user:state.user,
      repo:state.repos,
      loading: state.loading,
      searchUsers,
      getUser,
      getRepos,
      deleteUsers
    }}>
     {children}
    </githubContext.Provider>
  )
  
}

export default githubContext