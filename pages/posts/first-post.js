import React from 'react'
import Link from 'next/link';

function firstPost({posts}) {
  
  return (
    <>
      <h1>First Post</h1>
      <h>
        <Link href="/">
          <a >Back to home</a>
        </Link>

       </h>
       {posts.map((item,index)=><h3 key={index}>{item.title}</h3>)}
    </>
  )
}


export const getStaticProps = async (ctx) => {
    
     const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
     const posts = await res.json()
     return {
        props:{   posts   },
        revalidate: 10
    }
}

export default firstPost