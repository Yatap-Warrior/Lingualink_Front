const isColor = (strColor: string): boolean => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
};

export { isColor };
