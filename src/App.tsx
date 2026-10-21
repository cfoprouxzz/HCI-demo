import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { AppProvider } from './hooks/useApp';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Analysis from './pages/Analysis';
import Assessment from './pages/Assessment';
import MenuPlanner from './pages/MenuPlanner';
import History from './pages/History';
import Settings from './pages/Settings';
import { EmptyState } from './components/UI';

export default function App() {
    return <AppProvider><BrowserRouter><Routes><Route element={<AppLayout />}><Route index element={<Dashboard />} /><Route path="members" element={<Members />} /><Route path="analysis" element={<Analysis />} /><Route path="assessment" element={<Assessment />} /><Route path="menu" element={<MenuPlanner />} /><Route path="history" element={<History />} /><Route path="settings" element={<Settings />} /><Route path="*" element={<EmptyState title="Không tìm thấy trang" description="Quay về không gian gia đình để tiếp tục." to="/" label="Về tổng quan" />} /></Route></Routes></BrowserRouter></AppProvider>;
}
