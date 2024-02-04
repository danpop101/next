import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
 return (
   <div className="mx-10 flex justify-between px-4">
    <div>test</div>
    <UserButton/>
   </div>
 ) 
}