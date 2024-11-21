import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Scoreboard from "../components/Scoreboard";

describe("Scoreboard Component", () => {
  it("renders current score correctly", () => {
    const currentScore = 5;
    const highScore = 5;

    render(<Scoreboard currentScore={currentScore} highScore={highScore} />);

    const currentScoreElement = screen.getByText(
      `Current Score: ${currentScore}`
    );
    expect(currentScoreElement).toBeInTheDocument();
  });

  it("renders high score correctly", () => {
    const currentScore = 5;
    const highScore = 5;

    render(<Scoreboard currentScore={currentScore} highScore={highScore} />);

    const highScoreElement = screen.getByText(
      `High Score: ${highScore}`
    );
    expect(highScoreElement).toBeInTheDocument();
  })

  it('renders both scores together', () => {
    const currentScore = 8;
    const highScore = 15;

    render(<Scoreboard currentScore={currentScore} highScore={highScore} />);

    expect(screen.getByText(`Current Score: ${currentScore}`)).toBeInTheDocument();
    expect(screen.getByText(`High Score: ${highScore}`)).toBeInTheDocument();
  });
});
