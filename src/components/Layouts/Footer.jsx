import { FaFaceSmile } from 'react-icons/fa6'
 function Footer() {

  const footerYear =  new Date().getFullYear();
  
  return (
    <footer className="footer bg-gray-700 text-primary-content p-10 footer-center">
      <FaFaceSmile className='text-5xl text-white mb-none  ' />
      <p className='text-white'>teeTech &copy;{footerYear} All copy rights reserved!</p>
    </footer>
  )
}
export default Footer
