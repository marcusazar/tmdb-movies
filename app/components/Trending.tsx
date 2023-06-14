import List, { Result } from './List';
import { apiOptions } from '../page';
import { imageSize } from '../page';

const getTrending = async(): Promise<any> => {
  const response = await fetch(`${apiOptions.baseUrl}/trending/movie/day`, {
    headers: apiOptions.headers
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch trending data')
  }
  return response.json();
}

const Trending = async() => {
  const trendingData: any = await getTrending();
  const trending: Result[] = trendingData.results;

  return (
    <List imageSize={imageSize.large} data={trending.slice(0,2)} />
  )
}

export default Trending