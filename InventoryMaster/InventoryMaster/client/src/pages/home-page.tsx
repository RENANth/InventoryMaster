import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Product, Category } from "@shared/schema";
import ProductsTable from "@/components/products-table";
import ProductForm from "@/components/product-form";
import { Link } from "wouter";
import { Plus, LogOut } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function HomePage() {
  const { user, logoutMutation } = useAuth();
  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({ queryKey: ["/api/products"] });
  const { data: categories, isLoading: categoriesLoading } = useQuery<Category[]>({ queryKey: ["/api/categories"] });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">Inventory Manager</h1>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-foreground hover:text-primary">Products</Link>
              <Link href="/categories" className="text-muted-foreground hover:text-primary">Categories</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Welcome, {user?.username}</span>
            <Button variant="outline" size="sm" onClick={() => logoutMutation.mutate()}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Products</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <ProductForm categories={categories || []} />
            </DialogContent>
          </Dialog>
        </div>

        {(productsLoading || categoriesLoading) ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <ProductsTable products={products || []} categories={categories || []} />
        )}
      </main>
    </div>
  );
}
