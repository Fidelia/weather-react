import React, { useState } from "react";

export default function FormatDate(props) {
  let day = props.date.getDay();
  return `${day} 15 Feb 2021`;
}
