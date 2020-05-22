import axios from "axios";
import {
  GET_ERRORS,
  GET_DOCUMENT,
  GET_DOCUMENTS,
  DELETE_DOCUMENT,
} from "./type";

export const createDocument = (document, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8081/api/document",
      document
    );
    history.push("/dashboard"); //place where u want to redirect
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const getDocument = (documentId, history) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:8081/api/document/${documentId}`
  );
  dispatch({
    type: GET_DOCUMENT,
    payload: res.data,
  });
};
export const getDocuments = (document, history) => async (dispatch) => {
  const res = await axios.get(
    "http://localhost:8081/api/document/all",
    document
  );
  dispatch({
    type: GET_DOCUMENTS,
    payload: res.data,
  });
};
export const deleteDocument = (documentId) => async (dispatch) => {
  const res = await axios.delete(
    `http://localhost:8081/api/document/${documentId}`
  );
  dispatch({
    type: DELETE_DOCUMENT,
    payload: documentId,
  });
};
