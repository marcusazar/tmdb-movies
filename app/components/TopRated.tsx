import List, { Result } from './List';
import { imageSize } from '../page';
import { apiOptions } from '../page';

const getTopRated = async(): Promise<any> => {
  const response = await fetch(`${apiOptions.baseUrl}/movie/top_rated`, {
    headers: apiOptions.headers
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Top rated data')
  }

  // To test react streaming with Suspense
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.json();
}

const TopRated = async() => {
  const topRatedData: any = await getTopRated();
  const topRated: Result[] = topRatedData.results;

  return ( 
    <List imageSize={imageSize.large} data={topRated.slice(0,5)} />
  )
}

export default TopRated