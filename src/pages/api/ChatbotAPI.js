import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const newSession = async ({ user_id, session_id, app_type_id }) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot/get_started`, {
      user_id: user_id,
      session_id: session_id,
      app_type_id: app_type_id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const endSession = async ({ user_id, session_id }) => {
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

export const chatHistory = async ({ user_id, session_id }) => {
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

export const responseChat = async ({ user_id, session_id, request }) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatbot/respond_chat`, {
      user_id: user_id,
      session_id: session_id,
      request: request,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectEstimation = async ({
  project_estimation_id,
  max_time,
}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/chatbot/project_estimation`,
      {
        project_estimation_id: project_estimation_id,
        max_time: max_time,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFeatures = async (project_estimation_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/chatbot/project_estimations/${project_estimation_id}/features`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEstimation = async (
  project_estimation_id,
  { selected, feature_id }
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/chatbot/project_estimations/${project_estimation_id}`,
      {
        selected: selected,
        feature_id: feature_id,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEstimationGroup = async (
  project_estimation_id,
  { updates }
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/chatbot/project_estimations/${project_estimation_id}/group_features`,
      {
        updates,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendError = async ({ user_id, session_id }) => {
  try {
    await fetch("/api/sendError", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, session_id }),
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateEmail = async (user_id, email) => {
  try {
    const response = await axios.put(`${BASE_URL}/chatbot/users/${user_id}`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
