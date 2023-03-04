import React from "react";
import DateTime from "../DateTime";
import declensionWord from "../../../helpers/declensionWord";

const content = diff => {
  if (diff < 60) return '12 минут назад';
  if (diff > 60 && diff < 300) return '5 часов назад';
  const daysPassed = diff / 14400;
  const word = declensionWord(Math.round(daysPassed), ["день", "дня", "дней"])
  return `${Math.round(daysPassed)} ${word} назад`;
}

export default function DateTimePretty({children})  {
  const now = new Date;
  const diff = (now.getTime() - new Date(children.props.date).getTime()) / 60000;

  return (
    <DateTime date={content(diff)}/>
  )
}
