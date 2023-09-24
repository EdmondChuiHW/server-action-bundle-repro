"use server";

import { revalidatePath } from "next/cache";
import { incrementID } from "../../lib/memory-db";

export async function onIncrementClick() {
  await incrementID();

  revalidatePath("/");
}
