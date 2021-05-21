import React from 'react';
import { css } from '@emotion/react'

export const Test: React.FC = () => {
  return (
    <div css={hello}>
      test
    </div>
  )
}

const hello = css`
  color: blue;
`