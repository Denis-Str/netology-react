import React from "react";
import Popular from "../components/Popular";
import New from "../components/New"

export default function Wrapper(Component, item) {
  const { views } = item;
  return class extends React.Component {
    render() {
      if (views < 100) return (<New><Component {...item} /></New>);
      if (views > 1000) return (<Popular><Component {...item} /></Popular>);
      return (<Component {...item} />);
    }
  }
}
