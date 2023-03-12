import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TokenInput from "../../../components/TokenInput";
import { TOKENS } from "../../../config";

export default function AddPage() {
    const router = useRouter();
    useEffect(() => {
        console.log(router.query)
    }, [router])
    const [firstToken, setFirstToken] = useState(TOKENS[0]);
    const [secondToken, setSecondToken] = useState(TOKENS[1])
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
                <div className="swap-box">
                    <div className="swap-title">
                        <button className="btn-icon" onClick={() => router.push("/pool")}>
                            <ArrowBackRoundedIcon />
                        </button>
                        <h2>Add Liquidity</h2>
                        <button className="btn-icon">
                            <HelpOutlineRoundedIcon />
                        </button>
                    </div>
                    <div className="swap-main">
                        <TokenInput tokenImage={firstToken.icon} title={firstToken.tokenName} onChange={(e) => setFirstToken(e)} />
                        <div className="display-center">
                            <AddRoundedIcon />
                        </div>
                        <TokenInput tokenImage={secondToken.icon} title={secondToken.tokenName} onChange={(e) => setSecondToken(e)} />
                    </div>
                    <button className="btn-add-amount" style={{ marginTop: 10 }}>
                        Enter an amount
                    </button>
                </div>
            </main>
        </>
    )
}