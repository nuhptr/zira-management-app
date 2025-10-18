import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-sm items-center justify-center min-h-svh min-w-svw">
      <Input className="max-w-sm" />
      <Button>primary</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"muted"}>muted</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"tertiary"}>tertiary</Button>
    </div>
  )
}
