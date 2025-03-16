import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Product } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function ProductTable({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const { data: categories = [] } = useQuery({
    queryKey: ["/api/categories"],
  });

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  const filteredProducts = search
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.sku.toLowerCase().includes(search.toLowerCase()) ||
          product.manufacturer?.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Search products..."
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Manufacturer</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>
                {categories.find((c) => c.id === product.categoryId)?.name}
              </TableCell>
              <TableCell>{product.manufacturer}</TableCell>
              <TableCell>{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
