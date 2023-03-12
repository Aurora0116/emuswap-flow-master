import { NextSeo } from "next-seo"
export default function Home() {
  return (
    <>
      <NextSeo
        title="emuswap | Flow token swap, pool, farm, stake"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        openGraph={{
          url: 'https://emuswap.herokuapp.com/',
          title: 'emuswap | Flow token swap, pool, farm, stake',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            {
              url: 'https://emuswap.herokuapp.com/img/seo/flow-emuswap.png',
              width: 500,
              height: 500,
              alt: 'Moduluc',
              type: 'image/png',
            }
          ],
          site_name: 'emuswap',
        }}
      />
      <main>
      </main>
    </>
  )
}
