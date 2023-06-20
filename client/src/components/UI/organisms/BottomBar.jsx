import Rectangle from "../atoms/Rectangle";

import AppLogo from "../molecules/AppLogo";

export default function BottomBar() {
    return (
        <div>
            <Rectangle width="100%" height="10vw" color="var(--primary-color)">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginRight: "20px",
                        height: "100%",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <AppLogo width={5.5} />
                    </div>
                </div>
            </Rectangle>
        </div>
    );
}
