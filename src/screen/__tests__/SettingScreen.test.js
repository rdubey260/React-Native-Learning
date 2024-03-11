import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../SettingsScreen';

jest.useFakeTimers();

const navigation = {
  state: { params: {} },
  navigate: jest.fn(),
};

jest.mock('react-native-chart-kit', () => ({
  ProgressChart: () => null,
}));

test('render the settings UI', () => {
  const setting = render(<SettingsScreen />);
  const tree = setting.toJSON();
  expect(tree).toMatchSnapshot();
});

test('mock setTimeout test', () => {
  const logSpy = jest.spyOn(console, 'log');
  jest.runAllTimers();
  expect(logSpy).toBeCalledWith('>>>>>');
});


test('Navigation test', () => {
  const { getByTestId } = render(<SettingsScreen navigation={navigation} />);
  fireEvent(getByTestId('navigate-axios'), 'press');
});