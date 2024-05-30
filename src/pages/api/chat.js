// pages/api/chat.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { conversation_id, bot_id, user, query } = req.body;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.coze.com/open_api/v2/chat',
      headers: {
        'Authorization': 'Bearer pat_IIcpYPnD5dY2JA7puDooEMvLrwuhONNTJQo2ncpyZoywE5zOJyTBG8lMDnh6Oz3S',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Host': 'api.coze.com',
        'Connection': 'keep-alive',
      },
      data: {
        conversation_id,
        bot_id,
        user,
        query,
        stream: true,
      },
      responseType: 'stream',
    });

    response.data.on('data', (chunk) => {
      res.write(chunk);
    });

    response.data.on('end', () => {
      res.end();
    });

    response.data.on('error', (err) => {
      console.error(err);
      res.status(500).json({ message: 'Stream error' });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Request error' });
  }
}
