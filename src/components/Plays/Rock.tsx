import React from 'react'
import * as S from './style';

const Rock:React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
  return (
    <S.Border borderColor={['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)']} onClick={onClick}>
      <S.Play>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"/></svg>  
      </S.Play>
  </S.Border>
  )
}

export default Rock