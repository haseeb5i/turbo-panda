import { css } from "@repo/styled/css";
import { Switch } from "@repo/ui/switch";

export default function Home() {
  return (
    <div className={css({ display: "flex" })}>
      <h2>Main App</h2>
      <div>
        <Switch />
      </div>
    </div>
  );
}
