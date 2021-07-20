import React from "react";

export interface emojiInterface {
  label: string;
  symbol: string;
}

const Emoji: React.FC<emojiInterface> = ({ label, symbol }) => {
  return (
    <span
      className={`emoji`}
      role={`img`}
      data-testid={`${label}-emoji`}
      aria-label={label ? label : ``}
      aria-hidden={label ? `false` : `true`}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
