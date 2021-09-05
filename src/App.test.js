import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Check whether the page loads', () => {
  render(<App />);
  const linkElement = screen.getByText(/Catopia!/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check number of images when the page loads', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('plant-image').length).toBe(20);
});

test('Check number of toxic images', () => {
  const { container } = render(<App />);
  const dropdown = screen.getByTestId('toxicity');
  fireEvent.change(dropdown, { target: { value: 'Toxic' } });
  expect(container.getElementsByClassName('plant-image').length).toBe(10);
});

test('Check number of non-toxic images', () => {
  const { container } = render(<App />);
  const dropdown = screen.getByTestId('toxicity');
  fireEvent.change(dropdown, { target: { value: 'Non-toxic' } });
  expect(container.getElementsByClassName('plant-image').length).toBe(10);
});

test('Check if text search is working', () => {
  const { container } = render(<App />);
  const input = screen.getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'plant' } })
  expect(container.getElementsByClassName('plant-image').length).toBe(4);
});

test('Check if both dropdown and text search is working', () => {
  const { container } = render(<App />);
  const input = screen.getByTestId('search-input');
  const dropdown = screen.getByTestId('toxicity');
  fireEvent.change(dropdown, { target: { value: 'Toxic' } });
  fireEvent.change(input, { target: { value: 'plant' } })
  expect(container.getElementsByClassName('plant-image').length).toBe(1);
});

test('Check if there are correct number of list items on list view', () => {
  const { container } = render(<App />);
  let toggle = screen.getByTestId('list-toggle');
  fireEvent(
    toggle,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(container.getElementsByClassName('list-wrapper').length).toBe(20);
});

test('Check number of toxic images on list view', () => {
  const { container } = render(<App />);
  const dropdown = screen.getByTestId('toxicity');
  let toggle = screen.getByTestId('list-toggle');
  fireEvent(
    toggle,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  fireEvent.change(dropdown, { target: { value: 'Toxic' } });
  expect(container.getElementsByClassName('list-wrapper').length).toBe(10);
});