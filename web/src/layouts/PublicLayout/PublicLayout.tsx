import { Link, routes } from '@redwoodjs/router'

type PublicLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PublicLayout
