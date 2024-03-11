import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen, { RenderItem } from '../HomeScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockState = {
  loginReducer: [{ payload: { password: 'asdf', userName: '123' } }],
};

const mockStore = configureStore();
const store = mockStore(mockState);

const navigation = {
  state: { params: {} },
  navigate: jest.fn(),
};

const component = (
  <Provider store={store}>
    <HomeScreen navigation={navigation} />
  </Provider>
);

test('should render the label of the social link', () => {
  const { findByTestId } = render(component);
  const label = findByTestId('list-container');
  expect(label).toBeTruthy();
});

test('render list', () => {
  const data = {
    id: '1',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
  };

  const mockPressedFn = jest.fn();
  const { getByTestId } = render(
    <RenderItem item={data} handlePress={mockPressedFn} />,
  );
  fireEvent(getByTestId('item-press'), 'press');
});
