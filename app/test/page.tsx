"use client"
export default function TestPage() {
    function onClick() {
        console.log('Testing')
    }
    return (
        <button onClick={onClick}>
            This is a test button
        </button>
    )
}