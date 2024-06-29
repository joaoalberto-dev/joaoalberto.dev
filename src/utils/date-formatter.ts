type Options = Intl.DateTimeFormatOptions;

const dateFormatter = (dateStyle: Options["dateStyle"] = "medium") =>
  new Intl.DateTimeFormat("en-US", { dateStyle });

export { dateFormatter };
