import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/init">Init</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/score">Score</Link>
        </li>
      </ul>
    </div>
  );
};
