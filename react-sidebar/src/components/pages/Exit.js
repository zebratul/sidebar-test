import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  margin-left: 5em;
  padding: 50px 0;
`;

export const Exit = (props) => (
  <GridWrapper>
    <p>Это страница выхода из личного кабинета</p>
    <p>Но пока что тут ничего нет!</p>
  </GridWrapper>
)