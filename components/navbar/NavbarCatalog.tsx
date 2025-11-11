"use client"
import { useState } from "react"
import Toggle from "../toggles"
import { Button } from "../ui/button"

const NavbarCatalog = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                className="bg-[#0cdcf7]"
            >
                Modal
            </Button>
            <Toggle isOpen={open} onClose={() => setOpen(false)}>
                Modal Details
            </Toggle>
        </div>
    )
}

export default NavbarCatalog