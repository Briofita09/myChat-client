import { Hourglass } from "react95";
import { Content } from "./style.js";

export default function Loading() {
  return (
    <Content>
      <Hourglass
        size={64}
        style={{
          marginTop: "30%",
          marginLeft: "40%",
        }}
      />
    </Content>
  );
}
