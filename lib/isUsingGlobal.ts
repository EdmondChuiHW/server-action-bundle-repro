export default function isUsingGlobal() {
  return process.env.NEXT_PUBLIC_USE_GLOBAL === "1";
}
