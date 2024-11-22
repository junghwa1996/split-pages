import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Search.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
// import mock from '@/mock.json'; // 이 코드를 지우고 API를 연동해 주세요

export default function Search() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const q = router.query['q'];
  // const movies = mock.movies; // 이 코드를 지우고 API를 연동해 주세요

  async function getMovies(query) {
    const res = await axios.get(`/movies/?q=${query}`);
    const nextMovies = res.data.results ?? [];
    setMovies(nextMovies);
  }

  useEffect(() => {
    getMovies(q);
  }, [q]);

  return (
    <>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={movies} />
    </>
  );
}
