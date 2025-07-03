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
        'Authorization': 'Bearer v^1.1#i^1#f^0#r^0#I^3#p^3#t^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',
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
