import React from 'react'
// import { GetStaticProps } from 'next'

// type LogsProps = {
//   name: string
//   title: string
//   text: string
//   data: string
//   directions: string
//   author: string
// }
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users0')
  console.log(res)
  return {
    props: {
      posts: res
    },
  };
};


const Changelog = ({ posts }) => {
  console.log(posts)
  return (
    <React.Fragment>
      {posts?.map((dataLog)=> {
        <h1 key={dataLog.id}>
          {dataLog.name}
        </h1>
      })}
    </React.Fragment>
  );
};

export default Changelog;