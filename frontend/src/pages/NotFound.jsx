function NotFound(){
  return(
    <div className="flex h-screen flex-col items-center justify-center bg-secondary">
      <h1 className="text-[15rem] font-black">404</h1>
      <p className="text-muted-foreground">
        Page not found.
      </p>
    </div>
  )
}

export default NotFound;