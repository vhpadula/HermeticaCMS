import PropTypes from "prop-types";
import Rectangle from "../atoms/Rectangle";
import TransparentLoginButton from "../molecules/buttons/TransparentLoginButton";
import AppLogo from "../molecules/AppLogo";

export default function UpperBar({ showButton }) {
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
                    {showButton && (
                        <div>
                            <TransparentLoginButton />
                        </div>
                    )}
                </div>
            </Rectangle>
        </div>
    );
}

UpperBar.propTypes = {
    showButton: PropTypes.bool,
};

UpperBar.defaultProps = {
    showButton: true,
};
