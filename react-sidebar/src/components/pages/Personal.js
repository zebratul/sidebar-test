import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin-left: 5em;
  padding: 50px 0;`;

export const Personal = (props) => (
  <GridWrapper>
    <p>Это страница персональных данных</p>
    <p>Но пока что тут ничего нет!</p>
  </GridWrapper>
)