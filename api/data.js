export default async function handler(req, res) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbzfJSm1yqp6PeagvmTEOLymyO1EejYo64mj3BuSoV3tytsPLnrltOf33zUxUk4YpC1v/exec");
  const data = await response.json();

  res.setHeader("Cache-Control", "s-maxage=30");
  res.status(200).json(data);
}
