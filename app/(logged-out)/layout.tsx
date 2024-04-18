type Props = {
  children?: React.ReactNode
}

const LoggedOutLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">{children}</div>
  )
}

export default LoggedOutLayout
