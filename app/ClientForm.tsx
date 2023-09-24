"use client";

import isUsingGlobal from "../lib/isUsingGlobal";
import { onIncrementClick } from "./actions/onIncrementClick";

export default function ClientForm() {
  return (
    <form action={onIncrementClick}>
      <button type="submit">
        Increment {isUsingGlobal() ? "(works)" : "(broken)"}
      </button>
    </form>
  );
}
