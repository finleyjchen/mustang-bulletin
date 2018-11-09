import { db } from "../../firebase/firebase";
import { addJob, removeJob, updateUserData } from "../../store/actions"
import { auth } from "../../firebase/firebase"
export function watchJobAddedEvent(dispatch) {
    db.ref(`jobs/`).on('child_added', (snap) => {    dispatch(addJob(snap.val()));
    });
   }

export function watchJobRemovedEvent(dispatch) {
    db.ref(`jobs/`).on('child_removed', (snap) => {
    dispatch(removeJob(snap.val()));
    });
   }

export function watchUserData(dispatch) {
    db.ref('users/' + auth.currentUser.uid).on('child_changed', (snap) => {
        dispatch(updateUserData(snap.val()));
    }
    )
}