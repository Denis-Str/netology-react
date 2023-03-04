import React from "react";
import DateTimePretty from "../../../hoc/DateTimePretty";
import DateTime from "../DateTime";

export default function Video({date, url}) {
  const Wrapper = DateTimePretty(DateTime, date);

  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <Wrapper />
    </div>
  )
}
