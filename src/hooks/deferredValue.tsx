import { memo } from "react";
import { useState, useDeferredValue } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  return (
    <div>
      {text.split("").map((char, index) => (
        <SlowItem key={index} char={char} />
      ))}
    </div>
  );
});

function SlowItem({ char }: { char: string }) {
  // Simulate a slow rendering item
  for (let i = 0; i < 100000000; i++) { " "}
  return <span>{char}</span>;
}

export default function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </div>
  );
}
