import { createContext, useContext, useLayoutEffect, useState } from 'react'
import { DisplayContext } from './DisplayContext'

export const NavigationContext = createContext({} as any)

export function NavigationProvider(props: any) {
    const [currentPath, setCurrentPath] = useState<string>("/")
    const [suspendedHash, setSuspendedHash] = useState<SuspendedHash>()
    const [transitioning, setTransitioning] = useState<boolean>(false)

    const { ScrollToTop } = useContext(DisplayContext)

    const overallTransitionTime = 1600

    let changePage: any
    let endTransition: any

    function SetURL(href: string, addToHistory: boolean = false) {
        if(addToHistory) {
            window.history.pushState("", "", `${href}`)
        } else {
            window.history.replaceState("", "", `${href}`)
        }
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
        if(currentPath === to) {
            ScrollToTop()
            return
        }   

        if(transitioning === true) {
            clearTimeout(changePage)
            clearTimeout(endTransition)
        }

        setTransitioning(true)
        changePage = setTimeout(() => {
            SetURL(to)
            setCurrentPath(to)
        }, (overallTransitionTime / 2))
        endTransition = setTimeout(() => {
            setTransitioning(false)
        }, overallTransitionTime)
    }

    function NavigatHash(to: string) {
        SetURL(to.startsWith("#") ? to : `#${to}`)
    }

    useLayoutEffect(() => {
        setCurrentPath(window.location.pathname)
    }, [window.location.pathname])

    return (
        <NavigationContext.Provider value={{
            Navigate,
            SetSuspendedHash,
            ExecuteSuspendedHash,
            transitioning,
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