import Link from "next/link";
import * as fcl from "@onflow/fcl"
import "../flow/config";
import { CloseIcon, MenuIcon, WalletIcon } from "./svgIcon";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const router = useRouter();
    const [user, setUser] = useState({ loggedIn: null });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fcl.currentUser.subscribe(setUser);
    }, [])

    useEffect(() => {
        console.log(user.addr)
    }, [user])

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-left">
                        <div className="logo">
                            <Link href="/swap">
                                <a>
                                    <>
                                        <Image
                                            src="/img/logo.png"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <span>emuswap</span>
                                    </>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="header-center">
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/pool">
                                        <a><span className={router.pathname === "/pool" ? "active" : ""}>Pool</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/swap">
                                        <a><span className={router.pathname === "/swap" ? "active" : ""}>Swap</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/farm">
                                        <a><span className={router.pathname === "/farm" || router.pathname === "/farm/deposit" ? "active" : ""}>Farm</span></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/stake">
                                        <a><span className={router.pathname === "/stake" || router.pathname === "/stake/detail" ? "active" : ""}>Stake</span></a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <button className="btn-connect" onClick={fcl.logIn}>
                            {user && user.addr ?
                                <>
                                    <WalletIcon />
                                    <span className="wallet-address">{user.addr}</span>
                                </>
                                :
                                <>
                                    <WalletIcon />
                                    <span>Connect wallet</span>
                                </>
                            }
                        </button>
                        <button className="mobile-trigger" onClick={() => setOpen(!open)}>
                            {!open ?
                                <MenuIcon /> :
                                <CloseIcon />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className={!open ? "mobile-nav" : "mobile-nav opened"}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/pool">
                                <a onClick={() => setOpen(false)}><span className={router.pathname === "/pool" ? "active" : ""}>Pool</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/swap">
                                <a onClick={() => setOpen(false)}><span className={router.pathname === "/swap" ? "active" : ""}>Swap</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/farm">
                                <a onClick={() => setOpen(false)}><span className={router.pathname === "/farm" ? "active" : ""}>Farm</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/stake">
                                <a onClick={() => setOpen(false)}><span className={router.pathname === "/stake" ? "active" : ""}>Stake</span></a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}