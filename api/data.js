export default async function handler(req, res) {
  const response = await fetch("여기에_AppsScript_URL");
  const data = await response.json();

  res.setHeader("Cache-Control", "s-maxage=60");
  res.status(200).json(data);
}
