import React, { Component } from 'react';
import { TouchableOpacity,Text} from 'react-native';
import {styles} from '../styles/squarestyles';

export default class Sqaure extends Component {
    getStyleClass = (index) => {
        const styleStorage = ['styleType1','styleType1','styleType2','styleType1','styleType1','styleType2',
                                'styleType3','styleType3','styleType4'];
        return styleStorage[index];
    }
    isDisabled = () => {
      const {winner, nextPlayerIsX,value} = this.props;
      return !nextPlayerIsX || (winner && winner.type!==null) || value!==null; 
    }
    render() {
      const {index, value, handleOnPress,winner,backGroundColorChange} = this.props;
      const sqaureValue = (value!==null) ? value : '';
      const typeStyle = this.getStyleClass(index);
      const stylesSquare = (backGroundColorChange) ? [styles.square,styles.backGroundBlack,styles[typeStyle]]: 
                                                        [styles.square,styles.backGroundWhite,styles[typeStyle]];
      const stylesText = (backGroundColorChange) ? styles.textWhite : styles.textBlack;
      return (
            <TouchableOpacity  style ={stylesSquare} disabled = {this.isDisabled()} 
                onPress={() => handleOnPress(index)}>
                <Text style = {stylesText}>{sqaureValue}</Text>
            </TouchableOpacity>    
      );
    }
  }