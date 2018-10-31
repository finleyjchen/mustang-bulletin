import { db, auth } from "./firebase";
import Moment from "react-moment";
import moment from "moment";
// User API

//Slugify function to make title into a url
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

export const doCreateUser = (id, displayname, email) =>
  db.ref(`users/${id}`).set({
    displayname,
    username: email.substring(0, email.lastIndexOf("@")),
    email,
    
  });

export const onceGetUsers = () => db.ref("users").once("value");

export const setUserDB = (id, value) =>
  db.ref(`users/${id}`).set({
    value
  });
export const getUser = username =>
  db
    .ref("users")
    .orderByChild("username")
    .equalTo(username)
    .once("value");

export const getUserObject = uid => db.ref("users/" + uid).once("value");

export const onceGetJobs = () => db.ref("jobs").once("value");
// Other db APIs ...

export const getJob = title =>
  db
    .ref("jobs")
    .orderByChild("url")
    .equalTo(title)
    .once("value");

export const createJob = (id, title, description, price, type) =>
  db.ref(`jobs/${id}`).set({
    title,
    description,
    price,
    url: auth.currentUser.uid.substring(0, 4) + "-" + slugify(title),
    type,
    user: auth.currentUser.email.substring(
      0,
      auth.currentUser.email.lastIndexOf("@")
    ),
    datePosted: moment().format()
  });
