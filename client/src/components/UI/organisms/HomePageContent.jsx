import AppLogo from "../molecules/AppLogo";
import WindowExample from "../../../assets/icons/WindowExample";
import AppSubTitle from "../atoms/text/AppSubTitle";
import GetStartedButton from "../molecules/buttons/GetStartedButton";

export default function HomePageContent() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8vw",
            }}
        >
            <AppLogo />
            <AppSubTitle />
            <GetStartedButton />
            <WindowExample />
        </div>
    );
}
