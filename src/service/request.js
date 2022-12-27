import axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3/`;
const keyAPI = 'api_key=ba9af9187d823167244a35c2fd918141';
const popularUrl = `trending/all/day?`;
const nameFilm = `search/movie?language=en-US&include_adult=false&`;

export const getPopularFilms = async () => {
  try {
    const response = await axios.get(`${baseUrl}${popularUrl}${keyAPI}`);
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

export const getCastByFilm = async (id) => {
        try {
      const response = await axios.get(
         `${baseUrl}movie/${id}/credits?${keyAPI}&language=en-US`
      );
      const { data } = response;
      return data;
    } catch (error) {       console.log('error', error )    } 
}

export const getReviewsFilm = async (id) => {
        try {
      const response = await axios.get(
         `${baseUrl}movie/${id}/reviews?${keyAPI}&language=en-US`
      );
      const { data } = response;
      return data;
    } catch (error) {       console.log('error', error )    } 
}

export const getFilmFromInput = async (query) => {
        try {
      const response = await axios.get(
        `${baseUrl}${nameFilm}${keyAPI}&query=${query}`
      );
      const { data } = response;
      return data;
    } catch (error) {       console.log('error', error )    } 
}