import ThemeToggle from "../ThemeToggle";

export default function ThemeToggleExample() {
  return (
    <div className="p-8 text-center">
      <p className="text-muted-foreground mb-4">Click to toggle theme</p>
      <ThemeToggle />
    </div>
  );
}
