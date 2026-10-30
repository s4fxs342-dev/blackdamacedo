import Link from "next/link";

const ExampleLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <>
    <header className="border-b">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center px-5 sm:px-8">
        <div className="flex flex-col py-3">
          <p className="text-lg leading-6 font-semibold tracking-tight">
            <Link
              href="/leads"
              className="focus-visible:ring-ring rounded-sm outline-none focus-visible:ring-2"
            >
              Form Router
            </Link>
          </p>
          <p className="text-muted-foreground text-sm leading-5">
            Jev and AI SDK
          </p>
        </div>
      </div>
    </header>
    {children}
  </>
);

export default ExampleLayout;
