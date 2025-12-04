import Header from "../layout/Header";

export default function HeaderExample() {
  return (
    <div className="min-h-[200px] bg-background relative">
      <Header onSearchOpen={() => console.log("Search opened")} />
      <div className="pt-20 p-8 text-center text-muted-foreground">
        Scroll down to see header behavior
      </div>
    </div>
  );
}
