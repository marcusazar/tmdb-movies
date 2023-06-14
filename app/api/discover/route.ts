import { apiOptions } from "../../page";

const getGenres = async(): Promise<any> => {
  const response = await fetch(`${apiOptions.baseUrl}/genre/movie/list`, {
    headers: apiOptions.headers
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch trending data')
  }

  return response.json();
}

export async function GET(requset: Request) {
  const genres: any = await getGenres();

  return new Response(JSON.stringify(genres))
}
