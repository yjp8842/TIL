import { call, put } from "redux-saga/effects";
import Axios from "axios";
import { questionActions } from "../slice/questionSlice";
import api from "../utils/axiosInstance";


export function* getQuestionAsync() {

  try {
    const response = yield api.get(`/question?room_id=1&size=10`);
    console.log(response);
    yield put(questionActions.getQuestionSuccessAsync(response.data));
  } catch (e) {
    yield put(questionActions.getQuestionFailedAsync(e.message));
  }
}

