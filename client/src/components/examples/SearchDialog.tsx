import { useState } from "react";
import SearchDialog from "../SearchDialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchDialogExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="p-8 text-center">
      <Button onClick={() => setOpen(true)}>
        <Search className="mr-2 h-4 w-4" />
        Open Search (Cmd+K)
      </Button>
      <SearchDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
