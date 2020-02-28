# Tic Tac Toe Game 

Create a version of tick tack toe in Java Script for two players following the standard rules.




## Criteria 
High test coverage.



## planning

player hold array of populated positions 
if player array includes winning combo then they win 



planning form from front to back
- Mark mark on board
- Take turns (X then Y)
- Win Logic
- Draw (when table full)
- Restart

## User stories
As a player 1
I would like to choose either O's or X's as my mark

As a player 2
The counter mark is assigned

As a player 1
On their turn 
I would like to place my mark on the grid
On an empty position

As player 2
On their turn 
I would like to place my mark on an empty position on the grid 

As a player
If I place three in a row 
The player wins

If all places on the grid are taken 
Without three of any single mark in a row
The game is considered a draw 

The game finishes
When the grid is full or a player wins

After each game
The win is added to a player 
And is shown on the screen in a tally

After each game
If it is a draw no score is added to a player
Draws are to be shown seperatly 



## Specs given 

The rules of tic-tac-toe are as follows:

    There are two players in the game (X and O)
    Players take turns until the game is over
    A player can claim a field if it is not already taken
    A turn ends when a player claims a field
    A player wins if they claim all the fields in a row, column or diagonal
    A game is over if a player wins
    A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.