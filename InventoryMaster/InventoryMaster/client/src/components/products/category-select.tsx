import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

export default function CategorySelect({
  value,
  onChange,
}: {
  value?: number;
  onChange: (value: number) => void;
}) {
  const { data: categories = [] } = useQuery({
    queryKey: ["/api/categories"],
  });

  return (
    <Select
      value={value?.toString()}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.id.toString()}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
