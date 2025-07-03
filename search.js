import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  const endpoint = `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(q)}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': 'Bearer YOUR_EBAY_API_TOKEN',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "eBay API error" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
