import type { MetaFunction } from "@remix-run/node";
import landscapes from '../util/imageLoader';
import Nav from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans">
        <Nav />
        <div className="grid gap-0">
            {landscapes.map((landscape, index) => (
                <img key={index} src={landscape} alt={`Landscape ${index + 1}`} className="w-full h-full object-cover" />
            ))}
        </div>
    </div>
  );
}
