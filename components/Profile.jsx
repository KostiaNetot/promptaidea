import React from 'react'

const Profile = ({ data }) => {
  return (
    <div>{data.map(d => (
      <p>{d}</p>
    ))}</div>
  )
}

export default Profile