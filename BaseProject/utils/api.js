const  ApiBaseUrl = 'http://t.talelin.com/';
module.exports = {
  ApiBaseUrl,
  //正在热映
  NowMovieDataApi: ApiBaseUrl + 'v2/movie/in_theaters',
  ComingMovieDataApi: ApiBaseUrl + 'v2/movie/coming_soon',
  Top250MovieDataApi: ApiBaseUrl + 'v2/movie/top250',
};



