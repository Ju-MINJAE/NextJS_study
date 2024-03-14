import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// Suspense : 컴포넌트의 렌더링에 필요한 무언가를 대기할 수 있도록 하는 기능
// Promise.all : 여러 개의 Promise들을 비동기적으로 실행하여 처리 가능
//               여러 개의 Promise들 중 하나라도 reject을 반환하거나 에러가 날 경우, 모든 Promise들을 reject
