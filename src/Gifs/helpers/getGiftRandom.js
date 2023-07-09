export const getGiftsRandom = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=8pWNaaWoByRdxNkObg9GDEZy7fVwqTX6&limit=10`
  );

  const { data } = await response.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  return gifs 
};
