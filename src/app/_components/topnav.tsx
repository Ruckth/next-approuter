import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="bg-secondary-bg p-4 text-xl mb-4">
      <div className="flex justify-between items-center">
        <div>Simple trainee</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}