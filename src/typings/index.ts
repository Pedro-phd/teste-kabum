export interface IReduxAction {
  type: String;
  payload: any;
}
export interface IMovieReducer {
  movieList: Array<IMovie | string>;
}
export interface IMovie {
  title: String;
  categories: Array<string>;
  favorite: boolean;
  labels: Array<string>;
  index?: any;
}

export interface IRootReducer {
  movie: IMovieReducer;
}
