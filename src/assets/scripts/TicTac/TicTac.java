import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class TicTac extends JPanel implements MouseListener, ActionListener {

    boolean player1 = true; // true = X, false = O
    boolean gameOver = false;
    int winner = 0; // 0 = none, 1 = player1, 2 = player2, 3 = draw
    int player1Win = 0, player2Win = 0;
    int[][] board = new int[3][3]; // 0 = empty, 1 = X, 2 = O

    JButton resetButton;

    Color dusty = new Color(0xfcbf49);
    Color dark = new Color(0xd62828);
    Color light = new Color(0x8d99ae);

    int cellSize = 90;
    int boardX = 30;
    int boardY = 30;

    public TicTac() {
        setPreferredSize(new Dimension(420, 300));
        setBackground(dusty);
        addMouseListener(this);

        resetButton = new JButton("Reset");
        resetButton.setBounds(310, 120, 80, 30);
        resetButton.addActionListener(this);
        resetButton.setVisible(false);
        setLayout(null);
        add(resetButton);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Tic Tac Toe");
        TicTac panel = new TicTac();
        frame.add(panel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setResizable(false);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        drawBoard(g);
        drawMarks(g);
        drawUI(g);
    }

    private void drawBoard(Graphics g) {
        g.setColor(dark);
        // vertical lines
        g.fillRect(boardX + cellSize, boardY, 5, cellSize * 3);
        g.fillRect(boardX + cellSize * 2, boardY, 5, cellSize * 3);
        // horizontal lines
        g.fillRect(boardX, boardY + cellSize, cellSize * 3, 5);
        g.fillRect(boardX, boardY + cellSize * 2, cellSize * 3, 5);
    }

    private void drawMarks(Graphics g) {
        Font font = new Font("Arial", Font.BOLD, 60);
        g.setFont(font);
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int x = boardX + j * cellSize + 20;
                int y = boardY + i * cellSize + 65;
                if (board[i][j] == 1) {
                    g.setColor(Color.RED);
                    g.drawString("X", x, y);
                } else if (board[i][j] == 2) {
                    g.setColor(Color.BLUE);
                    g.drawString("O", x, y);
                }
            }
        }
    }

    private void drawUI(Graphics g) {
        g.setColor(light);
        g.fillRect(300, 0, 120, 300);
        g.setColor(dark);
        g.setFont(new Font("SansSerif", Font.PLAIN, 14));
        g.drawString("Player 1 (X): " + player1Win, 310, 30);
        g.drawString("Player 2 (O): " + player2Win, 310, 60);

        if (gameOver) {
            String msg = "";
            if (winner == 1) msg = "Player 1 (X) wins!";
            else if (winner == 2) msg = "Player 2 (O) wins!";
            else msg = "It's a draw!";
            g.drawString(msg, 310, 100);
            resetButton.setVisible(true);
        } else {
            g.drawString("Turn: " + (player1 ? "Player 1 (X)" : "Player 2 (O)"), 310, 100);
            resetButton.setVisible(false);
        }
    }

    private boolean checkWin(int player) {
        // check rows
        for (int i = 0; i < 3; i++)
            if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
                return true;
        // check cols
        for (int j = 0; j < 3; j++)
            if (board[0][j] == player && board[1][j] == player && board[2][j] == player)
                return true;
        // diagonals
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
            return true;
        if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
            return true;

        return false;
    }

    private boolean boardFull() {
        for (int[] row : board)
            for (int cell : row)
                if (cell == 0)
                    return false;
        return true;
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        if (gameOver) return;

        int mx = e.getX();
        int my = e.getY();

        // check if click is inside board
        if (mx >= boardX && mx < boardX + cellSize * 3 && my >= boardY && my < boardY + cellSize * 3) {
            int col = (mx - boardX) / cellSize;
            int row = (my - boardY) / cellSize;

            if (board[row][col] == 0) {
                board[row][col] = player1 ? 1 : 2;

                // check if current player won
                if (checkWin(board[row][col])) {
                    gameOver = true;
                    winner = board[row][col];
                    if (winner == 1) player1Win++;
                    else player2Win++;
                } else if (boardFull()) {
                    gameOver = true;
                    winner = 3; // draw
                } else {
                    player1 = !player1; // switch turn
                }

                repaint();
            }
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == resetButton) {
            resetGame();
        }
    }

    private void resetGame() {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                board[i][j] = 0;
        gameOver = false;
        winner = 0;
        player1 = true;
        resetButton.setVisible(false);
        repaint();
    }

    // unused mouse events
    public void mousePressed(MouseEvent e) {}
    public void mouseReleased(MouseEvent e) {}
    public void mouseEntered(MouseEvent e) {}
    public void mouseExited(MouseEvent e) {}
}
