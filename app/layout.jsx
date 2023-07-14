import "@styles/globals.css";



export const metadata = {
title:  "The AI Dungeon Community",
description:  "The AI Dungeon Community",
}

const RootLayout = ({children}) => {
  return (
<html lang="en">
 <body className="bg-slate-700">
    <div className="main">
        <div className="gradient"/>

        </div>
    <main className="app">
        {children}

    </main>
 
 </body>
</html>

  )
}

export default RootLayout