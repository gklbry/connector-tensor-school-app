import React from 'react'

const Metting = ({ params }: { params: { id: string } }) => {
  return (
    <div>Metting Room: #{params.id}</div>
  )
}

export default Metting