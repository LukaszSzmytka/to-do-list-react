import {call, put, delay, takeLatest, takeEvery, select} from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksINLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksINLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksINLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksINLocalStorageHandler)
}