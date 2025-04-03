import {Button} from "@/components/ui/button";
import Tasks from "@/components/schedulo/tasks";
import { signInaction } from "@/action/auth-action";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>login</h1>

      <form action={signInaction}>
      <Button>Hi</Button>
      </form>
    </main>
  );
}
