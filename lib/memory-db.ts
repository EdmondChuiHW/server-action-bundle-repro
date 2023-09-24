import "server-only";
import isUsingGlobal from "./isUsingGlobal";

let countID = 1;

if (isUsingGlobal()) {
  global.countID = 1;
}

export async function getID() {
  if (isUsingGlobal()) {
    return global.countID;
  }

  return countID;
}

export async function incrementID() {
  if (isUsingGlobal()) {
    global.countID += 1;
  }

  countID += 1;
}
