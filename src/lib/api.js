const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTczZDZjMTgwMTZjYTJkNjM5Y2U0ZjAwYjVhODdlMSIsInN1YiI6IjYzZDE2NTc4OWY1MWFmMDA4Mjk5ZjViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5wsiX4IvqXCntVs9KcgdLbl1KGBRCpDqUWZXN2T1meg'

export const getUpComingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
    headers: {
      Authentication: `Bearer ${token}`,
    },
  })
  return data.json()
}

export const getSimilarMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
    headers: {
      Authentication: `Bearer ${token}`,
    },
  })
  return data.json()
}
