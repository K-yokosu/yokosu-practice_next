"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar } from "./sidebar"

export default function HeaderSidebar({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const headerMenuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const sidebarMenuItems = [
    {
      name: "Crud",
      href: "/crud",
      subItems: [
        { name: "fetch", href: "/crud/fetch" },
      ],
    },
    {
      name: "shadcn",
      href: "/shadcn",
      subItems: [
        { name: "accordion", href: "/shadcn/accordion" },
      ],
    },
  ]

  const MenuItem = ({ item }: { item: typeof sidebarMenuItems[0] }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(!isOpen)
    const handleMouseEnter = () => setIsOpen(true)
    const handleMouseLeave = () => setIsOpen(false)

    if (item.subItems) {
      return (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CollapsibleTrigger
            className="flex w-full items-center justify-between p-2 hover:bg-gray-100"
            onClick={handleToggle}
          >
            {item.name}
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="transition-all duration-300 ease-in-out">
            <div className="ml-4">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block p-2 hover:bg-gray-100"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }

    return (
      <Link href={item.href} className="block p-2 hover:bg-gray-100">
        {item.name}
      </Link>
    )
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b px-4">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <nav className="flex items-center">
          {headerMenuItems.map((item) => (
            <Link key={item.href} href={item.href} className="mx-2 text-sm">
              {item.name}
            </Link>
          ))}
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="ml-2 md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col">
                {sidebarMenuItems.map((item) => (
                  <MenuItem key={item.href} item={item} />
                ))}
              </nav>
              {/* <Sidebar /> */}
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 overflow-y-auto border-r md:block">
          <nav className="flex flex-col">
            {/* {sidebarMenuItems.map((item) => (
              <MenuItem key={item.href} item={item} />
            ))} */}
            <Sidebar />
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  )
}