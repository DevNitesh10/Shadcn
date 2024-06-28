import { Button } from "@/components/ui/button";

const ChaiPage = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>ChaiPage 🍵🫖☕</div>
      <button className="px-6 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">
        Test Button
      </button>
      <Button variant={"chai"} size={"sm"}>Shadcn Button</Button>
    </main>
  );
};

export default ChaiPage;
