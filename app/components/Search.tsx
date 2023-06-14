'use client';

import React, { ChangeEvent } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from "../styles/search.module.css";

export const Search = () => {

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)

    // TODO: call Api to get data by query, GET(baseUrl/?query=${event.target.value})
    // Change to search page and show data
  }

  return (
    <div className={styles['search-field-container']}>
      < FaSearch />
      <label>
        <input
          type="text"
          role="search"
          name="query"
          placeholder='Search movie title'
          className={styles.search}
          onChange={handleChangeQuery}
        />
      </label>
    </div>
    
  ) 
}
