import type { V2_MetaFunction } from "@remix-run/node";
import {Hero} from "../../../packages/component-library/src/components/Hero";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Child project</h1>
      <ul>
        <li>
          <a
            target="_self"
            href="http://192.168.1.70:3000/"
            rel="noreferrer"
          >
            Parent project
          </a>
        </li>
      </ul>
      <h1 className="text-3xl font-bold underline">
        Some child project content
      </h1>
      <Hero />
    </div>
  );
}
