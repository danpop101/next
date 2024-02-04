import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
 return (
   <div className="mx-10 flex justify-between items-center">
    <div>test</div>
    <UserButton/>
   </div>
 ) 
}