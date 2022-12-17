export const fetchApi = async () => {
  const url = "Datos.json";
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
};
