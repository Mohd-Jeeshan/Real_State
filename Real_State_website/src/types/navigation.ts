export type PageType = 'home' | 'projects' | 'contact';

export interface NavigationState {
  page: PageType;
  section?: string;
  filter?: string;
  location?: string;
  projectId?: string;
  searchParams?: {
    location?: string;
    type?: string;
    budget?: string;
    purpose?: string;
  };
}

export type NavigateFn = (state: NavigationState) => void;
