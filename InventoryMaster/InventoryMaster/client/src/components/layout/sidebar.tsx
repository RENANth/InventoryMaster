import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { LogOut, Warehouse } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, logoutMutation } = useAuth();

  return (
    <div className="min-h-screen grid grid-cols-[240px,1fr]">
      <aside className="bg-sidebar border-r">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <Warehouse className="h-6 w-6" />
              <span className="font-bold">Product Catalog</span>
            </div>
          </div>
          <div className="mt-auto p-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{user?.username}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => logoutMutation.mutate()}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
