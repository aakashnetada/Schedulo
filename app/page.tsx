import { Import } from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todoex</h1>
      <Button >Hi </Button>
      <p>Tasks</p>
      {tasks?.map((task, idx))}
    </main>
  );
}
