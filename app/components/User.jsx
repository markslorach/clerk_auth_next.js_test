"use client";

import { useUser } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function User() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <div>Hello, {user.fullName}!</div>
  }

  return <div>Not signed in</div>;
}
