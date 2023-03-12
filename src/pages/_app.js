import Header from '../components/Header'
import '../styles/style.scss'

function EmuSwap({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default EmuSwap
