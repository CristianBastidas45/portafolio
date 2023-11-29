import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UsersPage = () => {

  const [users, setUsers] = useState()

  const { quantity } = useParams()

  useEffect(() => {
    const url = `https://randomuser.me/api/?results=${quantity}`
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [quantity])

  console.log(users)

  return (
    <div>
      <h2>UsersPage {quantity}</h2>
    </div>
  )
}

export default UsersPage