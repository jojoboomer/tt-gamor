import type { ToastVariant } from "@/lib/toast-component";
import { cn } from "@/lib/utils";
import { Info, TriangleAlert } from "lucide-react";

// The Toast functional component responsible for rendering a single toast notification.
function Toast({ title, description, variant }: ToastProps) {
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      aria-atomic="true"
      className={cn(
        "bg-panel flex gap-px rounded-lg shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4"
      )}
    >
      <div className="flex flex-1 items-center flex-col">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <div className="flex items-center gap-2">
          {variant === "info" && <Info className="w-6 h-6 dark:text-white text-black" />}
          {variant === "error" && <TriangleAlert className="w-6 h-6 text-warning" />}
          <p className="text-sm text-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Toast;

interface ToastProps {
  id: string | number; // A unique identifier for the toast (likely used by a toast manager).
  title?: string; // Optional main heading/title for the toast.
  description?: string; // Optional descriptive text for the toast.
  variant: ToastVariant; // The type/variant of the toast, determining its visual style and icon.
}
