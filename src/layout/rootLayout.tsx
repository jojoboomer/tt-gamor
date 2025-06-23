import GameModal from "@/features/Home/components/gameModal";
import { loadLiveStreams } from "@/lib/streamService";
import useGamorStore from "@/store/main.store";
import { ModalProvider } from "@/store/modal.context";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const RootLayout = () => {
  const { theme } = useGamorStore();
  const { data, setData } = useGamorStore();

  // Checks if the Zustand store's persisted state has been rehydrated from storage.
  // Nescessary for the initial load of data from the MOCK API
  const hasHydrated = useGamorStore.persist.hasHydrated();

  // This effect runs whenever the `theme` from the store changes.
  useEffect(() => {
    let applied = theme;
    if (theme === "system") {
      applied = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.classList.toggle("dark", applied === "dark");
  }, [theme]);

  // This effect runs when `hasHydrated` changes, or when `setData` or `data` change.
  useEffect(() => {
    if (hasHydrated) {
      if (!data || data.length === 0) {
        const load = async () => {
          try {
            const response = await loadLiveStreams();
            setData(response);
          } catch (error) {
            console.error("Failed to load live streams data", error);
          }
        };
        load();
      } else {
        console.log("Data already loaded from persisted state");
      }
    }
  }, [setData, hasHydrated, data]);

  return (
    <ModalProvider>
      <main className="relative bg-background text-text min-h-screen w-full">
        <Outlet />
      </main>
      <GameModal />
      <Toaster />
    </ModalProvider>
  );
};

export default RootLayout;
