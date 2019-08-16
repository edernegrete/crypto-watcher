import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackgroundStyled = styled.div`
  height: 100vh;
  background-color: ${({ background }) => background};
  padding: 1rem;
`;

function Background({ children, ...props }) {
  return (
    <BackgroundStyled {...props}>
      {children}
    </BackgroundStyled>
  );
}

Background.defaultProps = {
  background: 'var(--darkblue)'
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

export default Background;
