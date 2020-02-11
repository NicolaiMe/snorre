import React from 'react'
import styled from '@emotion/styled/macro'

const Wrapper: React.FC = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-column-gap: 10px;
  grid-template-columns: repeat(13, 1fr);
  grid-row-gap: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
  max-width: 500px;
`

interface IProps {
  children: any[]
}

const SbIconGrid: React.FC<IProps> = props => {
  return (
    <Wrapper>
      {props.children.map((item, key) => {
        return (
          <span key={key} title={item?.props.mdxType}>
            {item}
          </span>
        )
      })}
    </Wrapper>
  )
}

export default SbIconGrid
