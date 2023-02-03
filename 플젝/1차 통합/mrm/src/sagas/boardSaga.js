import { call, put } from "redux-saga/effects";
import Axios from "axios";
import {boardActions} from '../slice/boardSlice'
export function* getBoardAsync() {
  try {
    const response = yield Axios.get(`http://localhost:4000/board/`);
    yield put(boardActions.getBoardSuccessAsync(response.data));
  } catch (e) {
    yield put(boardActions.getBoardFailedAsync(e.message));
  }
}

// 댓글 개수 실패ㅠㅠ
// import { put } from "redux-saga/effects";
// import Axios from "axios";
// import { boardActions } from "../slice/boardSlice";

// export function* getBoardAsync() {
//   try {
//     const responseForBoard = yield Axios.get(`http://localhost:4000/board/`);
//     const responseForComment = yield Axios.get(
//       `http://localhost:4000/comment/`
//     );

//     const boardData = responseForBoard.data;

//     if (responseForComment.data.length > 0) {
//       for (var article in responseForBoard.data) {
//         const comments = [];
//         for (var comment in responseForComment.data) {
//           if (
//             responseForComment.data[comment].articleId ===
//             responseForBoard.data[article].id
//           ) {
//             comments.push(responseForComment.data[comment].id);
//           }
//         }
//         boardData[article]["comments"] = comments;
//       }
//     }

//     yield put(boardActions.getBoardSuccessAsync(boardData));
//   } catch (e) {
//     yield put(boardActions.getBoardFailedAsync(e.message));
//   }
// }