'use client'

import React, {ChangeEvent, ReactNode, useEffect, useState} from 'react'
import { genre } from '../discover/page'

interface IGenreFilters {
  setSelectedOption: (option: string) => void
}

const GenreFilters = (props: IGenreFilters): ReactNode => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState<genre[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/discover').then(
      res => res.json()
    ).then(
      json => setGenres(json.genres)
    )
  }, [])
  
  const selectFilterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedGenre(event.target.value);
    props.setSelectedOption(event.target.value);
  }

  return (
    <fieldset>
      <legend>Genres</legend>
      { genres.length > 0 && genres.map(genre => (
        <div key={genre.id}>
          <input
            type="radio"
            name="genre"
            id={genre.id.toString()}
            checked={selectedGenre === genre.name}
            value={genre.name}
            onChange={selectFilterHandler}
          />
          <label htmlFor={genre.id.toString()}>
            {genre.name}
          </label>
        </div>
      ))}
    </fieldset>
  )
}

// Memoizing component in order to prevent unnecessary render
export default React.memo(GenreFilters)