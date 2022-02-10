import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ProxyPage() {
  const { asPath } = useRouter()
  const [key, setKey] = useState(1)

  const basePath = asPath.split('/')[1]

  return (
    <>
    <h1>Rewrite asPath hydration mismatch</h1>
    <p>
      <Link href={`/${basePath}`} key={String(key)}>Base path link</Link>
    </p>
    <ul>
      <li>
        href value: {typeof window !== 'undefined' ? document.querySelector('a').href : ''}
      </li>
      <li>
        asPath value: {asPath}
      </li>
    </ul> 
    <button onClick={() => setKey(cur => cur + 1)}>Increment Key (click twice to update href value above)</button>
    </>
  )
}
