import React, { Component } from 'react';
import { Vibration } from 'react-native';
import GameBoard from './gameboard';
import PropTypes from 'prop-types';
import {winnerScenarios} from '../common';

class TicTacToe extends Component {
    state = {
        squareValues : Array(9).fill(null),
        orderOfMoves : [],
        nextPlayerIsX: true,
        singlePlayer:true,
    }

    // The Ai will make a move after Human Move updates the square.
    componentDidUpdate(){
        const {nextPlayerIsX,singlePlayer} = this.state;
        const winner = this.checkWinner();
        if(!nextPlayerIsX){
            new Promise(function(resolve, reject) {
                // If Winner is already present Ai will not make any further move.
                // ToDo: - Improve calling checkWinner() twice, eliminate redundancy can improve code.
                if(winner) reject();
                setTimeout(() => resolve(), 500);
            }).then(() => this.changeAIMove()).catch(() => {});
        }     
    }

    render() {
        const {squareValues,nextPlayerIsX,orderOfMoves} = this.state;
        const winner = this.checkWinner();
        if(winner)
            Vibration.vibrate(400 , false);
        return (
            <GameBoard squareValues = {squareValues} orderOfMoves={orderOfMoves} handleOnPress = {this.handleOnPress} handleRestart = {this.handleRestart}
                winner = {winner} nextPlayerIsX = {nextPlayerIsX}/>
        );
    }

    generateRandomNumber = (squareValues) => {
        // ToDo: Create a more better way to create random values.
        let availableMoves = [];
        squareValues.forEach((value,index) => {
            if(value === null) availableMoves.push(index);
        })
        // TODO:- Atleast check if winning then only create random values.
        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    changeAIMove = () => {
        const {squareValues,orderOfMoves} = this.state;
        const nextMove = this.predictMove();
        if(nextMove){
            squareValues[nextMove.emptyIndex] = 'O';
            orderOfMoves.push(nextMove.emptyIndex);
        } else {
            const nextIndex = this.generateRandomNumber(squareValues);
            squareValues[nextIndex] = 'O';
            orderOfMoves.push(nextIndex);
        } 
        this.setState({squareValues,orderOfMoves,nextPlayerIsX:true});
    }

    // Handling Human Move
    handleOnPress = (index) => {
        const {squareValues,orderOfMoves} = this.state;
        squareValues[index] = 'X';
        orderOfMoves.push(index);
        this.setState({squareValues,orderOfMoves,nextPlayerIsX:false});
    }

    // SettingUp Players SinglePlayer or Multiplayer
    handlePlayerSetup(){
        
    }
    // ToDo: Handle Redo Event.
    // handleRedo = () => {
    //     const {squareValues,nextPlayerIsX,orderOfMoves} = this.state;
    //     if(orderOfMoves.length === 0) return;
    //     const redoIndex = orderOfMoves.pop();
    //     squareValues[redoIndex] = null;
    //     this.setState({squareValues,nextPlayerIsX:!nextPlayerIsX,orderOfMoves});
    // }

    handleRestart = () => {
        const {squareValues,orderOfMoves} = this.state;
        squareValues.fill(null);
        this.setState({squareValues,nextPlayerIsX:true,orderOfMoves:[]});
    }

    checkWinner = () => {
        const {squareValues} = this.state;
        for(let i=0;i<winnerScenarios.length;i++)
        {
          const [a,b,c] = winnerScenarios[i];
          if(squareValues[a] && squareValues[a] === squareValues[b] && squareValues[a] === squareValues[c]){  
            return {type:squareValues[a],indexes:winnerScenarios[i]};
          }    
        }
        return null;
    }
    
    predictMove = () => {
        const {squareValues} = this.state;
        let defendingScenario = null;
        for(let i=0;i<winnerScenarios.length;i++)
        {
          const [a,b,c] = winnerScenarios[i];
          if(squareValues[a] && squareValues[a] === squareValues[b] && squareValues[c] === null){
            if(squareValues[a] === 'O') return {type:squareValues[a],emptyIndex:c};
            else
                defendingScenario = {type:squareValues[a],emptyIndex:c}
          }     
          else if(squareValues[a] && squareValues[a] === squareValues[c] && squareValues[b] === null){
            if(squareValues[a] === 'O') return {type:squareValues[a],emptyIndex:b};
            else 
                defendingScenario = {type:squareValues[a],emptyIndex:b};
          }   
          else if(squareValues[b] && squareValues[b] === squareValues[c] && squareValues[a] === null){
            if(squareValues[b] === 'O') return {type:squareValues[b],emptyIndex:a};
            else 
                defendingScenario = {type:squareValues[b],emptyIndex:a};
          }           
        }
        return defendingScenario;
    }
}

TicTacToe.propTypes = {
        squareValues : PropTypes.array,
        orderOfMoves : PropTypes.array,
        nextPlayerIsX: PropTypes.bool,
}

export default TicTacToe;