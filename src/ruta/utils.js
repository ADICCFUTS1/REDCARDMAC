export const getFormattedTime = (todo) => {
  const dta = [];
  const date = new Date(todo.dt * 1000);
  const hours = "0" + date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);
  dta.push(formattedTime);
  return dta;
};
