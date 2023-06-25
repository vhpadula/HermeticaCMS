import HomePage from "./components/pages/HomePage/HomePage";
import AuthPage from "./components/pages/AuthPage";
import MainPage from "./components/pages/MainPage";
import LoginForm from "./components/UI/organisms/LoginForm";
import RegisterForm from "./components/UI/organisms/RegisterForm";
import ProfileForm from "./components/UI/organisms/ProfileForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagesTab from "./components/UI/organisms/PagesTab";
import ImagesTab from "./components/UI/organisms/ImagesTab";
import AuthorsTab from "./components/UI/organisms/AuthorsTab";
import SettingsTab from "./components/UI/organisms/SettingsTab";
import EditPageTab from "./components/UI/organisms/EditPageTab";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />}>
                    <Route index element={<LoginForm />} />
                    <Route path="register" element={<RegisterForm />} />
                    <Route path="registerProfile" element={<ProfileForm />} />
                </Route>

                <Route path="/main" element={<MainPage />}>
                    <Route path="pages" index element={<PagesTab />} />
                    <Route path="images" element={<ImagesTab />} />
                    <Route path="authors" element={<AuthorsTab />} />
                    <Route
                        path="siteConfigurations"
                        element={<SettingsTab />}
                    />
                    <Route path="editPage" element={<EditPageTab />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
