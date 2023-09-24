import isUsingGlobal from "../lib/isUsingGlobal";
import { getID } from "../lib/memory-db";
import ClientForm from "./ClientForm";

export default async function Home() {
  const nextID = await getID();

  return (
    <main>
      <h1>ID: {nextID}</h1>
      <h2>
        Using {isUsingGlobal() ? "global object" : "module-level variable"}
      </h2>
      <ClientForm />
      {!isUsingGlobal() && (
        <h3>
          Update <pre style={{ display: "inline" }}>.env.local</pre> to the
          following for a workaround
          <pre style={{ WebkitUserSelect: "all", userSelect: "all" }}>
            NEXT_PUBLIC_USE_GLOBAL=1
          </pre>
        </h3>
      )}
    </main>
  );
}
