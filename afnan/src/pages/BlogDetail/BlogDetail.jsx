import React, { useRef, useState } from 'react'
import Components from './Components'
import { useParams } from 'react-router-dom'
const BlogDetail = () => {
  const { slug } = useParams()
  const { id } = useParams()
  return (
    <main role='main' id='main'>
      <Components slug={slug} id={id}/>
    </main>
  )
}

export default BlogDetail
