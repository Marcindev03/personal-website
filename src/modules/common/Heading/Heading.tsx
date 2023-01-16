import { Component, JSX } from "solid-js";

type HeadingProps = {
  children: JSX.Element;
};

export const Heading: Component<HeadingProps> = ({ children }) => (
  <h3 class="text-3xl py-1">{children}</h3>
);
