import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { AppData } from '../types';
import { initialMembers } from '../data/members';
import { sampleMeals } from '../data/sampleMeals';
const STORAGE = 'bep-nha-demo-v1';
export const freshData = (): AppData => ({ members: structuredClone(initialMembers), history: structuredClone(sampleMeals), savedMenus: [], currentMeal: null, selectedMember: 'lan', consent: false });
function readData(): AppData { try { const raw = localStorage.getItem(STORAGE); if (raw) { const d = JSON.parse(raw) as AppData; if (d.consent && Array.isArray(d.members) && Array.isArray(d.history) && Array.isArray(d.savedMenus)) return d; } } catch {/* Fall back to the demo if storage is unavailable. */ } return freshData(); }
type ToastState = { message: string; undo?: () => void };
type Context = { data: AppData; setData: React.Dispatch<React.SetStateAction<AppData>>; notify: (message: string, undo?: () => void) => void; toast: ToastState | null; dismissToast: () => void; storageError: boolean };
const AppContext = createContext<Context | null>(null);
export function AppProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState(readData); const [toast, setToast] = useState<ToastState | null>(null); const [storageError, setStorageError] = useState(false); const timer = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => { try { if (data.consent) localStorage.setItem(STORAGE, JSON.stringify(data)); else localStorage.removeItem(STORAGE); setStorageError(false); } catch { setStorageError(true); } }, [data]);
    useEffect(() => () => clearTimeout(timer.current), []);
    const notify = (message: string, undo?: () => void) => { clearTimeout(timer.current); setToast({ message, undo }); timer.current = setTimeout(() => setToast(null), undo ? 12000 : 5000); };
    return <AppContext.Provider value={{ data, setData, notify, toast, dismissToast: () => setToast(null), storageError }}>{children}</AppContext.Provider>;
}
export function useApp() { const ctx = useContext(AppContext); if (!ctx) throw new Error('AppProvider is required'); return ctx; }
