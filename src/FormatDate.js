import React, { useState } from "react";

export default function FormatDate(props) {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0{minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
