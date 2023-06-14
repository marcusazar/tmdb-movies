'use client'

import React, { ReactNode } from 'react'
import styles from "../styles/list.module.css"
import { imageBaseUrl } from '../page';
import Link from 'next/link';
import Image from 'next/image'

export type Result = {
  [key: string]: string | number
};

interface IListProps {
  imageSize: string,
  data: Result[],
}

const List = (props: IListProps): ReactNode => {

  const dateHandler = (dateString:string) => {
    return (new Date(dateString)).getFullYear();
  }

  return (
    <ul className={styles.list}>
      { props.data && props.data.map((d: any) => (
        <li className={styles.item} key={d.original_title}>
          <Link href={'#'}>
          <Image
            src={`${imageBaseUrl}/${props.imageSize}${d.poster_path}`}
            width={300}
            height={300}
            alt={d.title}
          />
          <div>
            <p>{d.original_title}</p>
            <p>{dateHandler(d.release_date)}</p>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default List