import React,{useState} from 'react'
import Avatar from '../component/Avatar'

export default function upload() {
  const [value,setValue] = useState();
  return (
    <div>
      <Avatar value={value} onChange={(newValue)=>{setValue(newValue)}} >
      </Avatar>
    </div>
  )
}
