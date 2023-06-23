import Rectangle from "../atoms/Rectangle";
import AppLogo from "../molecules/AppLogo";

export default function TitleBar() {
    return (
        <div>
            <Rectangle width="100%" height="10vw" color="var(--primary-color)">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 20px",
                        height: "100%",
                    }}
                >
                    <div>
                        <AppLogo width={5.5} />
                    </div>
                </div>
            </Rectangle>
        </div>
    );
}
