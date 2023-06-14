'use client'

import React, { ReactNode } from 'react'

interface IDiscoverProps {
  genre: string
};

const DiscoverList = (props: IDiscoverProps): ReactNode => {
  console.log(props.genre)
  return ( 
    <ul>
      {/* {Object.values(data).map((d: any) => (
        <li key={d.original_title}>
          {d.original_title}
        </li>
      ))} */}
    </ul>
  )
}

export default DiscoverList