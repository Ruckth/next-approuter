import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="bg-gray-800 p-4 border-b-white text-xl mb-4">
      <div className="flex justify-between items-center">
        <div>Gallery</div>
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