import "react-native";
import React from "react";
import App from "../App";
import { fizzbuzz } from "../functions/fizzBuzz";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<App />);
});

// return 1 first test:

it("return 1 when num is 1", () => {
  const expected = 1;
  const actual = fizzbuzz(1);
  expect(actual).toEqual(expected);
});

it("return 2 when num is 2", () => {
  const expected = 2;
  const actual = fizzbuzz(2);
  expect(actual).toEqual(expected);
});

it("return 'fizz' when num is 3", () => {
  const expected = "fizz";
  const actual = fizzbuzz(3);
  expect(actual).toEqual(expected);
});

it("return 'fizz' when num is a multiple of 3", () => {
  const expected = "fizz";
  const actual = fizzbuzz(6);
  expect(actual).toEqual(expected);
});

it("return 'buzz' when num is 5", () => {
  const expected = "buzz";
  const actual = fizzbuzz(5);
  expect(actual).toEqual(expected);
});

it("return 'buzz' when num is a multiple of 5", () => {
  const expected = "buzz";
  const actual = fizzbuzz(10);
  expect(actual).toEqual(expected);
});

it("return 'fizzbuzz' when num is a multiple of 5 and 3", () => {
  const expected = "fizzbuzz";
  const actual = fizzbuzz(15);
  expect(actual).toEqual(expected);
});
