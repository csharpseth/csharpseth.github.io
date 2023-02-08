import React, { createContext, useContext, useLayoutEffect, useState } from 'react'

export const NavigationContext = createContext({} as any)

export function NavigationProvider(props: any) {
    const [currentPath, setCurrentPath] = useState<string>("/")
    const [suspendedHash, setSuspendedHash] = useState<SuspendedHash>()

    function SetURL(href: string) {
        window.history.replaceState("", "", `${href}`)
    }

    function SetSuspendedHash(link: string, hash: string, loadCallback: any) {

        if(link === currentPath) {
            SetURL(`#${hash}`)
            loadCallback()
            return
        }

        setSuspendedHash({
            hash,
            loadCallback
        })

        NavigatePath(link)
    }

    function ExecuteSuspendedHash() {
        if(!suspendedHash) return

        if(!currentPath){
            SetURL(`#${suspendedHash.hash}`)
        }
        else{
            SetURL(`${currentPath}#${suspendedHash.hash}`)
        }
        if(suspendedHash.loadCallback) suspendedHash.loadCallback()

        setSuspendedHash(undefined)
    }

    function Navigate(to: string) {
        if(to.startsWith("#"))
            NavigatHash(to)
        else
            NavigatePath(to)
    }

    function NavigatePath(to: string) {
        SetURL(to)
        setCurrentPath(to)
    }

    function NavigatHash(to: string) {
        SetURL(to.startsWith("#") ? to : `#${to}`)
    }

    useLayoutEffect(() => {
        setCurrentPath(window.location.pathname)
    }, [window.location.hash])

    return (
        <NavigationContext.Provider value={{
            Navigate,
            SetSuspendedHash,
            ExecuteSuspendedHash,
            currentPath,
        }}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export function Route(props: any) {
    const { currentPath } = useContext(NavigationContext)
    
    if(currentPath != props.path) { return <div></div> }

    return (
        <>
        {props.children}
        </>
    )
}

interface SuspendedHash {
    hash: string
    loadCallback: any
}