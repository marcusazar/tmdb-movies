import List, { Result } from './List';
import { apiOptions } from '../page';
import { imageSize } from '../page';

const getNowPlaying = async(): Promise<any> => {
  const response = await fetch(`${apiOptions.baseUrl}/movie/now_playing`, {
    headers: apiOptions.headers
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Top rated data')
  }
  return response.json();
}

const NowPlaying = async() => {
  const nowPlayingData: any = await getNowPlaying();
  const nowPlaying: Result[] = nowPlayingData.results;

  return ( 
    <List imageSize={imageSize.large} data={nowPlaying.slice(0,5)} />
  )
}

export default NowPlaying