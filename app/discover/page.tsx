'use client'

import List from "../components/List"
import GenreFilters from "../components/GenreFilters"
import { useState } from "react";
import DiscoverList from "../components/DiscoverList";

export type genre = {
  id: number,
  name: string
}

export default function Discover() {
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const selectOptionHandler = (option: string) => {
    setSelectedGenre(option);
  }

  return (
    <>
      <h2>Discover</h2>
      <GenreFilters
        setSelectedOption={(option:string) => selectOptionHandler(option)}/>
      <DiscoverList genre={selectedGenre} />
    </>
  )
}
