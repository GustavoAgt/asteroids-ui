import React, { useState } from "react";
import DatePicker from "react-date-picker";

const DatePick = ({ className }: { className?: string }) => {
  const [value, setValue] = useState<Date | null>(null);

  const onChange = (date: any) => {
    console.log(date);
    setValue(date);
  };
  return (
    <DatePicker
      onChange={onChange as any}
      value={value}
      className={className}
    />
  );
};

export default DatePick;
