import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin-left: 5em;
  padding: 50px 0;`;

export const NoMatch = (props) => (
  <GridWrapper>
    <h2>К сожалению, мы ничего не нашли</h2>
  </GridWrapper>
)