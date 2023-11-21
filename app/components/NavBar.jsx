import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <nav className="flex justify-between py-16 px-4 bg-slate-200">
        <h1 className='3xl text-black/80'>Clerk Auth</h1>
        <UserButton afterSignOutUrl="/"/>
    </nav>
  )
}
