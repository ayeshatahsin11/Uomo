"use client"
const { default: navbarData } = require("@/app/data/navbarData");
import React from 'react'
//shadcn
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
//shadcn
const Navicons = () => {
  return (
    <div>
        <ul className='flex gap-8'>
  {navbarData?.icons?.map((item, index) => (
    <li key={index}>
   
        {item.id === "Search" ?
     
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className='cursor-pointer'>{item?.icon}</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
              <Input  name="Search" placeholder = "Search products" />

              <div className='w-full h-125 bg-pink-200'></div>
            
        </DialogContent>
      </form>
    </Dialog>

    :

    item.id === "User" ?
  
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className='cursor-pointer'>{item?.icon}</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
         
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
 

    :

    <button className='cursor-pointer'>{item?.icon}</button>
  
}

       
    </li>
  ))}
</ul>
    </div>
  )
}

export default Navicons

