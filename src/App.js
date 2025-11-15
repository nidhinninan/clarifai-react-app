import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import './App.css';

function App() {
  return (
    <Routes>
      {/* The Authenticator will handle the sign-in UI and logic */}
      <Route path="/*" element={<AuthenticatedApp />} />
    </Routes>
  );
}

function AuthenticatedApp() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          {/* The header is now inside the dashboard components, so we can remove the generic one */}
          <Routes>
            {/* Redirect root to the appropriate dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={
              <RoleBasedDashboard user={user} signOut={signOut} />
            } />
            {/* Add other routes here if needed, e.g., a profile page */}
          </Routes>
        </div>
      )}
    </Authenticator>
  );
}

// Component to check user role and render appropriatefunction RoleBasedDashboard({ user }) {
function RoleBasedDashboard({ user, signOut }) {  
  const groups = user?.signInUserSession?.accessToken?.payload['cognito:groups'] || [];
  
  if (groups.includes('Admin')) {
    return <AdminDashboard user={user} signOut={signOut} />;
  } else if (groups.includes('User')) {
    return <UserDashboard user={user} signOut={signOut} />;
  } else {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>You don't have the required permissions. Please contact your administrator.</p>
      </div>
    );
  }
}

export default App;