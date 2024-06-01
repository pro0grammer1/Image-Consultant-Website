import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./../Header/header.jsx"
import Footer from "./../Footer/footer.jsx"
import Loading from "./../Fallback/loading.jsx"

export default function Layout() {
    return (
        <>
            <React.Suspense fallback={<Loading />}>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </React.Suspense>
        </>
    )
}