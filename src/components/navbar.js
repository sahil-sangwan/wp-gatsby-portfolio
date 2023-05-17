import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainNav = styled.ul`
  list-style-type: none;
  display: ${ props => props.display };
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }`