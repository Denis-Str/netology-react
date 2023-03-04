import React from "react";
import declensionWord from "../helpers/declensionWord";

const content = diff => {
  if (diff < 60) return '12 минут назад';
  if (diff > 60 && diff < 300) return '5 часов назад';
  const daysPassed = diff / 14400;
  const word = declensionWord(Math.round(daysPassed), ["день", "дня", "дней"])
  return `${Math.round(daysPassed)} ${word} назад`;
}

export default function DateTimePretty(Component, date)  {
  const now = new Date;
  const diff = (now.getTime() - new Date(date).getTime()) / 60000;

  return class extends React.Component {
    render() {
      return (<Component date={content(diff)}/>)
    }
  }
}
