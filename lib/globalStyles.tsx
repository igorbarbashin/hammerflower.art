import { css, Global, keyframes } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        background: #f1f2ef;
        font-family: 'Philosopher', Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 500;
      }

      * {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: 'Forum', 'Times New Roman', serif;
        font-weight: normal;
        margin-bottom: 0;
      }

      img {
        max-width: 100%;
      }
    `}
  />
);
