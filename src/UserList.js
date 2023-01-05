import React from 'react'
import AverageAge from './AverageAge'
import UserItem from './UserItem'
import users from './users.json'

const UserList = () => {

   const averageAge = ()=>{
      const admins = users.filter(user => user.role === 'admin' )
      const adminAges = admins.map( admin => admin.age)

      const average = adminAges.reduce( (a,b) => a + b  )
      return average / admins.length
   }
   averageAge()
   return(
      <div>
         {users.map( user => {
            return (
               user.role === 'user' ? (
                  <UserItem name={user.name}/>
               ) : null
            )
         })}

         <AverageAge average={averageAge()}/>

         

      </div>
   )
}

export default UserList
