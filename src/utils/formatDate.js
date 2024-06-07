const formatString = (num) => (num < 10 ? `0${num}` : num);

export const formatDate = (ms) => {
  const date = new Date(ms);
  return `${formatString(date.getDate())}.${formatString(
    date.getMonth() + 1
  )}.${date.getFullYear()} / ${formatString(date.getHours())}:${formatString(
    date.getMinutes()
  )}`;
};
