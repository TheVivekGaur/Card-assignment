import Axios from 'axios';

export const onFetch = images => ({
 type: 'ON_FETCH',
 payload: images
});

export const onFetchStartAsync = () => {
 return (dispatch) => {
  let one = "https://picsum.photos/id/77/info"
  let two= "https://picsum.photos/id/66/info"
  let three = "https://picsum.photos/id/55/info"
  let four= "https://picsum.photos/id/44/info"

  const requestOne = Axios.get(one);
  const requestTwo = Axios.get(two);
  const requestThree = Axios.get(three);
  const requestFour = Axios.get(four);

    return Axios.all([requestOne, requestTwo, requestThree, requestFour])
    .then(Axios.spread((...responses) => { 
      dispatch(onFetch(responses));
    })) 
 }
}