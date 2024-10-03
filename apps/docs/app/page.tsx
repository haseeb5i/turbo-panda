import { css } from "@repo/styled/css";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className={css({ padding: 20, outline: "1px solid red" })}>
      <Button>some</Button>
    </div>
  );
}
