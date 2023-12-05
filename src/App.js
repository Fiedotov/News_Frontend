import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context"; // Import the AuthProvider
import CommonPageLayout from "./components/Common/CommonPageLayout";
import HomePage from "./pages/HomePage";
import HeadlinesPage from "./pages/HeadlinesPage";
import AnalyzePage from "./pages/AnalyzePage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap the entire application with AuthProvider */}
      <Router>
        <CommonPageLayout>
          {" "}
          {/* Use CommonPageLayout for consistent layout */}
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/headlines" element={<HeadlinesPage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/auth" element={<AuthPage />} />
            {/* ...other routes */}
          </Routes>
        </CommonPageLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;
