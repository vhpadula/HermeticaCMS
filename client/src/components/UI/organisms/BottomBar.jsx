import Rectangle from "../atoms/Rectangle";
import { primaryColor } from "../../../colors";
import AppLogo from "../molecules/AppLogo";

export default function BottomBar() {
  return (
    <div style={{ position: "relative" }}>
      <Rectangle width="100vw" height="120px" color={primaryColor} />
      <div style={{ position: "absolute", top: "50%", right: "0%", transform: "translate(50%, -50%)" , marginRight: "110px"}}>
        <AppLogo scale={0.2} />
      </div>
    </div>
  );
}
