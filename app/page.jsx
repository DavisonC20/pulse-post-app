import { redirect } from 'next/navigation';
import React from 'react'

function page() {
  return (
    /* Se rederige a la page posts */
    redirect('/posts')
  )
}

export default page