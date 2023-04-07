import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ConteinerBar = styled.header`
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  border: 1px solid rgb(189, 189, 189);
  background-color: #0b23a996;
  border-radius: 12px;
  position: fixed;
  z-index: 100;
`;

export const Button = styled.button`
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 0;
  background-image: url('https://www.svgrepo.com/show/511119/search-magnifying-glass.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #fff;
  :hover {
    opacity: 1;
  }
`;

export const LabelBtn = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const FormsSt = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  padding-left: 5px;
`;
