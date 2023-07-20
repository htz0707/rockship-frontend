export const UniqueArray = (array = []) => {
  return array.filter((item, index, self) => {
    return (
      index ===
      self.findIndex((obj) => obj.key === item.key && obj.value === item.value)
    );
  });
};
