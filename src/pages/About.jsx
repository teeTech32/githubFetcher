import {FaGithub} from 'react-icons/fa'

function About() {
  return (
    <div className="text-center">
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-ligth">This is an application built majorly with Reactjs and GithubAPI, some other tech tools are: TailwindCSS and DaisyUI. This app searches Github users profiles and gives the profile details.
        <br></br>
      <p className='float-left'>Illustrations For Users:</p>
        <br></br>
        <p>
          For fetching group of users, type in "users" at the search bar.
          <br></br>
          For fetching a single user, type in the user's username on Github.
        </p>
      </p>
      <p className=" text-lg text-gray-400">
        Version: <span className="text-white">1.1.0</span>
      </p>
      <p className=" text-lg text-gray-400 ">
        Layout By: 
        <div className='container mx-auto'>
          <a className="text-white underline  flex-none px-2 mx-2" href="https://github.com/teeTech32"><FaGithub className='inline text-3xl'/> Atanda Timothy</a>
        </div>
      </p>

    </div>
  )
}

export default About