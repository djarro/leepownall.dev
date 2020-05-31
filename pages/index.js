import Header from '../components/header'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Header />

      <dl>
        <dd><a href="https://github.com/leepownall" target="_blank">GitHub</a></dd>
        <dd><a href="https://twitter.com/leepownall" target="_blank">Twitter</a></dd>
      </dl>
    </Fragment>
  )
}
