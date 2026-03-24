import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DownloadModalContextType {
  isDownloadModalOpen: boolean;
  openDownloadModal: () => void;
  closeDownloadModal: () => void;
}

const DownloadModalContext = createContext<DownloadModalContextType | undefined>(undefined);

export function DownloadModalProvider({ children }: { children: ReactNode }) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <DownloadModalContext.Provider value={{ isDownloadModalOpen, openDownloadModal, closeDownloadModal }}>
      {children}
    </DownloadModalContext.Provider>
  );
}

export function useDownloadModal() {
  const context = useContext(DownloadModalContext);
  if (context === undefined) {
    throw new Error('useDownloadModal must be used within a DownloadModalProvider');
  }
  return context;
}
