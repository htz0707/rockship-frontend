import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const newSession = async (user_id, session_id, app_type) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot/get_started`, {
      user_id: user_id,
      session_id: session_id,
      app_type: app_type,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const endSession = async (user_id, session_id) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot/end_session`, {
      user_id: user_id,
      session_id: session_id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const chatHistory = async (user_id, session_id) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot/load_history`, {
      user_id: user_id,
      session_id: session_id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const responseChat = async (
  user_id,
  session_id,
  request_id,
  request
) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot/load_history`, {
      user_id: user_id,
      session_id: session_id,
      request_id: request_id,
      request: request,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
