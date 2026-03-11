import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './components/admin/AdminLayout'
import { ProtectedRoute } from './components/admin/ProtectedRoute'
import { Layout } from './components/layout/Layout'
import { AuthProvider } from './contexts/AuthContext'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import ProjectDetails from './pages/ProjectDetails'
import { ReferencesPage } from './pages/ReferencesPage'
import { TermsOfUsePage } from './pages/TermsOfUsePage'
import { DashboardPage } from './pages/admin/DashboardPage'
import { LoginPage } from './pages/admin/LoginPage'
import { ProjectFormPage } from './pages/admin/ProjectFormPage'
import { ProjectsListPage } from './pages/admin/ProjectsListPage'

function AdminAuthWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public routes — with Header + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>

        {/* Admin routes — no public Header/Footer */}
        <Route path="/admin-panel" element={<AdminAuthWrapper />}>
          <Route path="login" element={<LoginPage />} />
          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="projects" element={<ProjectsListPage />} />
            <Route path="projects/new" element={<ProjectFormPage />} />
            <Route path="projects/:id/edit" element={<ProjectFormPage />} />
            <Route
              path="settings"
              element={
                <div className="text-zinc-400">Settings — coming soon.</div>
              }
            />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}
