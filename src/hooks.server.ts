import { adminAuth } from "$lib/server/admin";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {

  // Get the session cookie from the event object.
  const sessionCookie = event.cookies.get("__session");

  // Try to decode the session cookie using the adminAuth function.
  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);

    // If the decoding was successful, set the `userID` local variable to the user ID.
    event.locals.userID = decodedClaims.uid;
    console.log("found user id", decodedClaims.uid);
  } catch (e) {

    // If the decoding failed, set the `userID` local variable to `null`.
    event.locals.userID = null;
    return resolve(event);
  }

  // Return the event object to the caller.
  return resolve(event);
});
handle satisfies Handle;