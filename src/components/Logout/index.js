// Write your code here

import './index.css'

const Logout = props => {
  const {logOut} = props

  return (
    <button className="button" type="button" onClick={logOut}>
      Logout
    </button>
  )
}

export default Logout
