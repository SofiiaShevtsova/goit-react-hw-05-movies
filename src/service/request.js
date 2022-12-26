import axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3/`;
const keyAPI = 'api_key=ba9af9187d823167244a35c2fd918141';
const popular = `trending/all/day?`;

export const getPopularFilms = async () => {
  try {
    const response = await axios.get(`${baseUrl}${popular}${keyAPI}`);
    return response.data.results;
  } catch (error) {}
};

export const getFilmById = async (id) => {
        try {
      const response = await axios.get(
         `${baseUrl}movie/${id}?${keyAPI}&language=en-US`
      );
      const { data } = response;
      return data;
    } catch (error) {       console.log('error', error )    } 
}





// export const showFilmsList = {
//   nameFilm: `search/movie?language=en-US&include_adult=false&`,

//   async getFilms(query) {
//     try {
//       if (query) {
//         const response = await axios.get(
//           `${this.baseUrl}${this.nameFilm}${this.keyAPI}&query=${query}`
//         );

//         if (response.data.results.length === 0) {
//           return;
//         }
//         return response.data.results;
//       } else {
//         //

//         return response.data.results;
//       }
//     } catch (error) {}
//   },
//   async getFilmsById(film_id) {
//     try {
//       const response = await axios.get(
//         `${this.baseUrl}movie/${film_id}?${this.keyAPI}&language=en-US`
//       );
//       const { data } = response;
//       return data;
//     } catch (error) {
//       console.log('error', error);
//     }
//   },
// };

// export const genres = {
//   options: 'api_key=ba9af9187d823167244a35c2fd918141',
//   baseUrl: 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&',
//   name: {},

//   async getGenres() {
//     try {
//       const response = await axios.get(`${this.baseUrl}${this.options}`);
//       const genresNameById = [...response.data.genres];
//       for (const elem of genresNameById) {
//         const id = Object.values(elem)[0];
//         const name = Object.values(elem)[1];
//         this.name = { ...this.name, [id]: name };
//       }
//     } catch (error) {}
//   },
// };

// genres.getGenres();

