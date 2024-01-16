"use client"

import qs from "query-string"
import React, { useState } from "react"
import { SearchIcon, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Search() {

    const router = useRouter()

    const [value, setValue] = useState("")

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const url = qs.stringifyUrl({
            url: '/', // in the future: "/search"
            query: { term: value }
        }, { skipEmptyString: true })

        router.push(url)
    }

    function onClear() {
        setValue("")
    }

    return (
        <form
            className="relative flex items-center w-full lg:w-[400px]"
            onSubmit={onSubmit}
        >
            <Input
                placeholder="Search"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {value &&
                <X
                    onClick={onClear}
                    className="absolute top-2.5 right-14 w-5 h-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                />
            }
            <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none"
            >
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </Button>
        </form>
    )
}