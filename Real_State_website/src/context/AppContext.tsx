import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { NavigationState, PageType } from '@/types/navigation';

interface AppContextValue {
  page: PageType;
  section: string | undefined;
  filter: string | undefined;
  location: string | undefined;
  projectId: string | undefined;
  searchParams: { location?: string; type?: string; budget?: string; purpose?: string } | undefined;
  navigate: (state: NavigationState) => void;
  enquiryOpen: boolean;
  setEnquiryOpen: (open: boolean) => void;
  enquiryProject: string | undefined;
  setEnquiryProject: (project: string | undefined) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageType>('home');
  const [section, setSection] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [projectId, setProjectId] = useState<string | undefined>(undefined);
  const [searchParams, setSearchParams] = useState<{ location?: string; type?: string; budget?: string; purpose?: string } | undefined>(undefined);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryProject, setEnquiryProject] = useState<string | undefined>(undefined);

  const navigate = useCallback((state: NavigationState) => {
    setPage(state.page);
    setSection(state.section);
    setFilter(state.filter);
    setLocation(state.location);
    setProjectId(state.projectId);
    setSearchParams(state.searchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (state.section) {
      setTimeout(() => {
        const el = document.getElementById(state.section!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        page,
        section,
        filter,
        location,
        projectId,
        searchParams,
        navigate,
        enquiryOpen,
        setEnquiryOpen,
        enquiryProject,
        setEnquiryProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
