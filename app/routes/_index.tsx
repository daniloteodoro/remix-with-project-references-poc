import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Parent project</h1>
      <ul>
        <li>
          <a
            target="_self"
            href="http://192.168.1.70:3001/"
            rel="noreferrer"
          >
            Child project
          </a>
        </li>
      </ul>
      <h1 className="text-3xl font-bold underline">
        Some customized tailwind content
      </h1>
    </div>
  );
}
