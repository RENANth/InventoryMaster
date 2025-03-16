import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Product } from "@shared/schema";

export default function ExportButton({ products }: { products: Product[] }) {
  const exportToCsv = () => {
    const headers = ["Name", "SKU", "Category", "Manufacturer", "Quantity"];
    const csv = [
      headers.join(","),
      ...products.map((product) =>
        [
          product.name,
          product.sku,
          product.categoryId,
          product.manufacturer,
          product.quantity,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="outline" onClick={exportToCsv}>
      <Download className="mr-2 h-4 w-4" />
      Export CSV
    </Button>
  );
}
