import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { TOKENS } from "../config";

export default function PoolPage() {
    const router = useRouter();
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
                            width: 335.44,
                            height: 100,
                            alt: 'Moduluc',
                            type: 'image/png',
                        }
                    ],
                    site_name: 'emuswap',
                }}
            />
            <main>
                <div className="page-box">
                    <div className="pool-title">
                        <h2>Your liquidity</h2>
                        <button className="btn-add" onClick={() => router.push("/add/0x1654653399040a61/0xcfdd90d4a00f7b5b")}>
                            <AddRoundedIcon />
                            <span>Add</span>
                        </button>
                    </div>
                    <div className="pool-alert-box">
                        <h3>No liquidity found</h3>
                        <p>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="table-container">
                        <table className="list-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Pair</th>
                                    <th>Fee</th>
                                    <th>TVL</th>
                                    <th>Pool</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="center">1</td>
                                    <td align="center">
                                        <div className="pair-item">
                                            <div className="pair-token-icon">
                                                <Image
                                                    src={TOKENS[0].icon}
                                                    width={28}
                                                    height={28}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="pair-token-icon">
                                                <Image
                                                    src={TOKENS[1].icon}
                                                    width={28}
                                                    height={28}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="pair-token-names">
                                                {TOKENS[0].tokenName}
                                                -
                                                {TOKENS[1].tokenName}
                                            </div>
                                        </div>
                                    </td>
                                    <td align="center">
                                        0.05 %
                                    </td>
                                    <td align="center">
                                        $ <span>11,512.12</span>
                                    </td>
                                    <td align="center">
                                        1
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">2</td>
                                    <td align="center">
                                        <div className="pair-item">
                                            <div className="pair-token-icon">
                                                <Image
                                                    src={TOKENS[0].icon}
                                                    width={28}
                                                    height={28}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="pair-token-icon">
                                                <Image
                                                    src={TOKENS[2].icon}
                                                    width={28}
                                                    height={28}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="pair-token-names">
                                                {TOKENS[0].tokenName}
                                                -
                                                {TOKENS[2].tokenName}
                                            </div>
                                        </div>
                                    </td>
                                    <td align="center">
                                        0.1 %
                                    </td>
                                    <td align="center">
                                        $ <span>41,743.83</span>
                                    </td>
                                    <td align="center">
                                        1
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}