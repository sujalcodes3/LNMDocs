import { Option } from "@material-tailwind/react";

export const subjects = ["COA", "M3"].map((ele) => {
  return <Option>{ele}</Option>;
});

export const types = ["Notes", "Previous-Year Papers"].map((ele) => {
  return <Option>{ele}</Option>;
});

export const years = ["2018", "2019", "2020", "2021"].map((ele) => {
  return <Option>{ele}</Option>;
});
