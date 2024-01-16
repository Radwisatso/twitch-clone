"use client"

import qs from "query-string"
import { useState } from "react"
import { SearchIcon, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Search() {
    return (
        <form
            className="relative flex items-center w-full lg:w-[400px]"
            onSubmit={() => {}}
        >
            <Input 
                placeholder="Search" 
                className="rounded-r-none focus-visible:ring-0"
                />
            <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none"
            >
                <SearchIcon className="w-5 h-5 text-muted-foreground"/>
            </Button>
        </form>
    )
}