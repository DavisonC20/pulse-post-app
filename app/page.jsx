import { redirect } from 'next/navigation';
import React from 'react'

function page() {
  return (
    redirect('/posts')
  )
}

export default page