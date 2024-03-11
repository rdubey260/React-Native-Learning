import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import LoginScreen from '../Login';

const navigate = jest.fn();

const component = (
  <Provider store={store}>
    <LoginScreen navigation={{ navigate }} />
  </Provider>
);

test('render the UI', () => {
  const login = render(component);
  const tree = login.toJSON();
  expect(tree).toMatchSnapshot();
});

test('email input', () => {
  const { getByTestId } = render(component);
  const inputEmail = getByTestId('input-email');
  fireEvent.changeText(inputEmail, 'abc');
  expect(inputEmail.props.value).toBe('abc');
});

test('password input', () => {
  const { getByTestId } = render(component);
  const inputEmail = getByTestId('input-password');
  fireEvent.changeText(inputEmail, 'abc');
  expect(inputEmail.props.value).toBe('abc');
});

test('Login button click', () => {
  const { getByTestId } = render(component);
  const button = getByTestId('login-button');
  fireEvent(button, 'press');
});
