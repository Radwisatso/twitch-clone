import React from "react"

export default function AuthPage({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="bg-red-500 w-full p-1">
                Auth navbar
            </nav>
            {children}
        </div>
    )
}