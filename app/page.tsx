import {Button} from "@/components/ui/button";
import Tasks from "@/components/schedulo/tasks";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todoex</h1>
      <Button>Hi</Button>
      <Tasks />
    </main>
  );
}
