import { ReactNode } from 'react'

const Container = ({children} : { children : ReactNode}) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default Container