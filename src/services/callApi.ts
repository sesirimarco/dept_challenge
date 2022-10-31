const callApi = async (url: string) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export default callApi;
