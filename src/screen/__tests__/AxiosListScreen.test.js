import React from 'react';
import { render } from '@testing-library/react-native';
import axios from "axios";
import AxiosListScreen from '../AxiosListScreen';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve()),
}));

const url = "https://dummyjson.com/products";

test('render the settings UI', () => {
  const setting = render(<AxiosListScreen />);
  const tree = setting.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should return todo list', async () => {
  //Our desired output
  const data1 = {
    limit: 30,
    products: [{
      brand: "Apple",
      category: "smartphones",
      description: "An apple mobile which is nothing like apple",
      discountPercentage: 12.96,
      id: 1,
      images: [
        ""
      ],
      price: 549,
      rating: 4.69,
      stock: 94,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      title: "iPhone 9"
    }],
    skip: 0,
    total: 100
  }

  //Prepare the response we want to get from axios
  const mAxiosResponse = {
    data: data1,
    config: {},
    headers: {},
    request: {},
    status: 200,
    statusText: undefined
  };
  jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
  render(<AxiosListScreen />);
});


