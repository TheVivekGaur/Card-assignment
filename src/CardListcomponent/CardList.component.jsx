import React from 'react';
import Card from '../Cardcomponent/card.component';
import { connect } from 'react-redux';
import {Cardlist}  from './CardList.component.styles';

const CardList = ({cards}) => {
return ( 
   <Cardlist>
    { cards.map((card, index)=> (
  <Card key={index}  card={card} />
    ))}
   </Cardlist>
 )
}

const mapStateToProps = state => ({
  cards: state.card.images
});

export default connect(mapStateToProps)(CardList);