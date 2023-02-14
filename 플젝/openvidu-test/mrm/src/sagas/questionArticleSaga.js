import { call, put } from "redux-saga/effects";
// import Axios from "axios";
// import { articleActions } from "../slice/articleSlice";
import { questionArticleActions } from "../slice/questionArticleSlice";
import history from "../utils/history";
import api from "../utils/axiosInstance";


export function* registerQuestionArticleAsync(action) {
  const data = action.payload;
  console.log('----------');
  console.log('questionarticleSage data 출력 : ',data)
  console.log('----------');
  const response = yield api.post(
    `/question?room_id=${data.room_id}&content=${data.content}&title=${data.title}&user_id=${data.user_id}`,
    data.picture
  )


  alert("저장되었습니다.");
  console.log('----------');
  console.log('response 출력 : ',response)
  console.log('response 출력 : ',response.data.newQuestion.id)
  console.log('----------');

  history.push(`/group/1/question/questionArticle/${response.data.newQuestion.id}`, response.data.newQuestion.id);
}


export function* getQuestionArticleAsync(action) {
  const id = action.payload;
  const response = yield api.get(`/question/${id}`);
  console.log('질문 상세조회 출력 : ',response.data)
  yield put(questionArticleActions.getQuestionArticleAsync(response.data));
}

export function* fetchQuestionArticleAsync(action) {
  console.log(action);
  const id = action.payload;
  const response = yield api.get(`/question/${id}`);

  yield put(questionArticleActions.getQuestionArticleAsync(response.data));
}

export function* updateQuestionArticleAsync(action) {
  const questionArticle = action.payload;
  console.log('updateArticleAsync article 호출 : ', questionArticle)
  const response = yield api.post(
    `/question/update?id=${questionArticle.id}&content=${questionArticle.content}&title=${questionArticle.title}&user_id=${questionArticle.user_id}&status=${questionArticle.status}`,
    questionArticle.picture
  );

  alert("저장되었습니다.");
  console.log(response.data.board);

  history.push(`/group/1/question/questionArticle/${response.data.question.id}`);
}

export function* deleteQuestionArticleAsync(action) {
  const id = action.payload;
  console.log('삭제해!!!')
  
  yield api.delete(`/question/${id}/hd`);

  alert("삭제되었습니다.");

  history.push(`/group/1/question`);
}