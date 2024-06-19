import { render, screen } from '@testing-library/react';


jest.setTimeout(10000)
const Beverages={
  name:'whisky',
  sweet: false,
  drink:'foreign'
}


test('Testing to see whether the properties of Beverages',()=>{
  expect(Beverages.name).toBe('whisky')
  // Testing for the presence of taste
  expect(Beverages.sweet).toBeFalsy()
})