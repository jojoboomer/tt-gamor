import type { ToastVariant } from "@/lib/toast-component";
import { cn } from "@/lib/utils";
import { Info, TriangleAlert } from "lucide-react";

function Toast({ title, description, variant }: ToastProps) {
  const variantClass = {
    info: "text-white",
    error: "text-white",
  };
  return (
    <div
      className={cn(
        variantClass[variant],
        "bg-panel flex gap-px rounded-lg shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4"
      )}
    >
      <div className="flex flex-1 items-center flex-col">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <div className="flex items-center gap-2">
          {variant === "info" && <Info className="w-5 h-5" />}
          {variant === "error" && <TriangleAlert className="w-5 h-5" />}
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Toast;

interface ToastProps {
  id: string | number;
  title?: string;
  description?: string;
  variant: ToastVariant;
}
