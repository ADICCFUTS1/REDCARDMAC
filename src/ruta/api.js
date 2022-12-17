export const fetchApi = async () => {
  console.log("fetchApi is being called");

  const url = "Datos.json";
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
};
