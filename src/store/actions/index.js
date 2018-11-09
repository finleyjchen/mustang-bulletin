import { db, auth } from "../../firebase/firebase";
import moment from "moment";
import {uuidv4} from 'uuid';

export const GET_USER = "get_user";
export const GET_DB_USERS = "get_db_users";
export const USER_STATUS = "user_status";
export const USER_DB_STATUS = "user_db_status";
export const GET_JOBS = "get jobs";
export const ADD_JOB = "add job";
export const REMOVE_JOB = "remove job";
export const UPDATE_USER = "update user data";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export const getUsers = (users) => {
  return {
    type: "GET_DB_USERS",
    users
  };
};

export const selectUser = user => {
  console.log(user.displayname);
  return {
    type: "SELECT_USER",
    payload: user
  };
};

export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function createAccount(data, picture) {
  const { fname, lname, email, password, image } = data;
  return dispatch => {};
}

export const doCreateUser = (id, displayname, email, dateJoined) =>
  db.ref(`users/${id}`).set({
    displayname,
    username: email.substring(0, email.lastIndexOf("@")),
    email,
    bio: null,
    major: null,
    gradyear: null,
    dateJoined
  });

export const doCreateUserWithEmailAndPassword = (
  email,
  password,
  displayname
) => auth.createUserWithEmailAndPassword(email, password);

export const getJobs = (jobs) => ({type: GET_JOBS, jobs})

export function getJobsThunk() {
  return dispatch => {
  const jobs = [];
  db.ref(`jobs/`).once('value', snap => {
   snap.forEach(data => {
   let job = data.val();
   jobs.push(job)
   })
  })
  .then(() => dispatch(getJobs(jobs)))
  }
 }

 export const addJob = (job) => ({type: ADD_JOB, job})

 export const removeJob = (job) => ({type: REMOVE_JOB, job})

 export function addJobThunk(title, description, price, type, deadline) {
   const id = uuidv4()
  db.ref(`jobs/${id}`).set({
    id,
   title,
   description,
   price,
   url: auth.currentUser.uid.substring(0, 4) + "-" + slugify(title),
   type,
   user: auth.currentUser.email.substring(
     0,
     auth.currentUser.email.lastIndexOf("@")
   ),
   datePosted: moment().format(),
   deadline
 });
 }

 export const removeJobThunk = (id) => {
   return dispatch => db.child(id).remove(dispatch(removeJob()))
 }

 export const updateUserData = (data) => ({
   type: UPDATE_USER,
   data
 })