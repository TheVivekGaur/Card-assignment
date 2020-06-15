import React, {useState, useEffect} from 'react';
import CardList from './CardListcomponent/CardList.component';
import { connect } from 'react-redux';
import {  onFetchStartAsync } from './redux/actions/card';

const  App = ({ onFetchStartAsync }) => {
 
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    onFetchStartAsync()
    .then(() => setLoading(false))
  }, [onFetchStartAsync]);

  if (loading)  return 'loading';

  return (
    <div className='App'>
    <h1 style={{textAlign:'center' ,color:'#2F4F4F'}}> CARDS TO BE DISPLAYED</h1>
    <CardList />
    </div>
  );
}

const mapDistpatchToProps = dispatch => ({
  onFetchStartAsync: () => dispatch(onFetchStartAsync())
});

export default connect(undefined, mapDistpatchToProps)(App);
