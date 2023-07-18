import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, lable) => {
  acc[lable] = (...args) => css`
    @media (max-width: ${sizes[lable] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width : 768px;`}
  ${media.tablet`width : 100%;`}
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;
const List = styled("list")`
  color: #ffffff;
`;
const StyledSample = styled("sample")`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;
const StyledComponent = ({ sample, list }) => {
  return (
    <Box color="pink">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
      <StyledSample className={sample}>Sample</StyledSample>
      <ul>
        <List>1</List>
        <List>2</List>
      </ul>
    </Box>
  );
};

export default StyledComponent;
