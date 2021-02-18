def displayBoard():
    print('Tic-Tac-Toe')
    for row in board:
        print(''.join(row))

def getPosition():
    row = int(input("Which row would you like to place in?\n"))
    column = int(input("Which column would you like to place in?\n"))
    row = (row-1)*2 + 1
    column *= 4

    return row, column

def playerTurn(turn):

    row, column = getPosition()

    while board[row][column] != ' ':
        print('Postion taken, please enter a new one.')
        row, column = getPosition()
    board[row][column] = turn


def checkWin(turn):
    # Check rows
    for i in range(3):
        if board[i*2+1][4] == turn:
            if board[i*2+1][4] == board[i*2+1][8] == board[i*2+1][12]:
                return True
    # Check columns
    for j in range(3):
        if board[1][4*j] == turn:
            if board[1][4*j] == board[3][4*j] == board[5][4*j]:
                return True
    # Check diagonal
    if board[1][4] == board[3][8] == board[5][12] == turn:
        return True
        
    if board[1][12] == board[3][8] == board[5][4] == turn:
        return True

    return False

def tie():
    for i in range(3):
        for j in range(3):
            if board[i*2 + 1][j*4] == ' ':
                return False
    return True

if __name__ == '__main__':
    board = [['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
            ['*',' ',' ',' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ','*'],
            ['*',' ',' ','-','-','-','|','-','-','-','|','-','-','-',' ',' ','*'],
            ['*',' ',' ',' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ','*'],
            ['*',' ',' ','-','-','-','|','-','-','-','|','-','-','-',' ',' ','*'],
            ['*',' ',' ',' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ','*'],
            ['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*']]
    turn = 'X'
    while True:
        displayBoard()
        playerTurn(turn)
        
        if checkWin(turn):
            print('You win!')
            break
        
        if tie():
            print('It\'s a tie!')
            break

        if turn == 'X':
            turn = 'O'
        
        else:
            turn = 'X'
        


