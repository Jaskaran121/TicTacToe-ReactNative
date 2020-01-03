import React, { Component } from 'react';
import Square from './square';
import { View, Text,TouchableOpacity} from 'react-native';
import {styles} from '../styles/gameboardstyles';
import ModalComponent from './modalComponent';

class GameBoard extends Component {
    renderSquare(index)
    {
        const {squareValues, handleOnPress, winner,nextPlayerIsX} = this.props;
        let backGroundColorChange = false;
        if(winner && winner.type!==null)
        {
            backGroundColorChange = winner && winner.indexes.includes(index);
        }
        return <Square index = {index} value = {squareValues[index]} handleOnPress = {handleOnPress} winner ={winner} 
            backGroundColorChange ={backGroundColorChange} nextPlayerIsX = {nextPlayerIsX}/>
    }   
    getStatus = () => {
        const {winner,nextPlayerIsX,orderOfMoves} = this.props;
        const nextPlayer = nextPlayerIsX ? 'X' : 'O';
        if(orderOfMoves.length > 8 && !winner) return "It's a draw!!";
        return winner && winner.type!==null? `Winner Is ${winner.type}` : `Next Player is ${nextPlayer}`;
    }
    render() {
        const {handleRestart} = this.props;
        const status = this.getStatus();
        return (<React.Fragment>
            <View style={styles.status}><Text>{status}</Text></View>
            <View style = {styles.board}>
            <View style = {styles.square}>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </View> 
            <View style = {styles.square}>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </View> 
            <View style = {styles.square}>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </View>
            </View>

            {/* Handle Redo Later*/}
            {/* <TouchableOpacity  style = {styles.restart} onPress = {() => handleRedo()}>
                <Text>Redo Last Movement</Text>
            </TouchableOpacity> */}
            {/* <View style = {styles.setUpPlayerModal}>
                <ModalComponent/>
            </View> */}
            <TouchableOpacity  style = {styles.restart} onPress={() => handleRestart()}>
                <Text>Restart Game</Text>
            </TouchableOpacity>
              
        </React.Fragment>);
    }
}

export default GameBoard;