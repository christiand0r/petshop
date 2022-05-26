const helpHttp = async (endpoint = "") => {
  // Extract URL to env
  const { VITE_URL } = import.meta.env;
  console.log(endpoint);

  try {
    const data = await fetch(`${VITE_URL}/${endpoint}`).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(new Error("Error al realizar la petición"))
    );

    return data;
  } catch (error) {
    return console.log(error);
  }
};

export default helpHttp;
