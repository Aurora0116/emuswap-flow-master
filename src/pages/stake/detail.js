import { useState } from "react";
import Image from "next/image";

export default function StakePage() {
    const [tab, setTab] = useState("stake");
    const [stakedAmount, setStakedAmount] = useState(0);
    const handleStakedAmount = (e) => {
        setStakedAmount(e)
    }
    return (
        <main>
            <div className="container">
                <div className="stake-page">
                    <div className="stake-item-detail">
                        <div className="detail-info">
                            <div className="info-box">
                                <div className="stake-item-detail-header">
                                    <h2>
                                        <Image
                                            src="/img/icons/flow-logo.svg"
                                            alt=""
                                            width={36}
                                            height={36}

                                        />
                                        <span style={{ marginLeft: 10, fontWeight: "bold" }}>
                                            EMU
                                        </span>
                                    </h2>
                                    <span className="header-info">
                                        Earn tUSDT stablecoin
                                    </span>
                                </div>
                                <div className="stake-info-content">
                                    <div className="stake-info">
                                        <label>Total staked</label>
                                        <p>$41,124</p>
                                    </div>
                                    <div className="stake-info">
                                        <label>Your staked</label>
                                        <p>$724</p>
                                    </div>
                                    <div className="stake-info">
                                        <label>APR (7D)</label>
                                        <p>$41,124</p>
                                    </div>
                                    <div className="stake-info">
                                        <label>Deposit Fee</label>
                                        <p>1.00 %</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="staked-info-box">
                                    <div className="staked-item">
                                        <label>Staked</label>
                                        <p>0 EMU</p>
                                        <label>$ 0</label>
                                    </div>
                                    <div className="staked-item">
                                        <label>Pending Rewards</label>
                                        <p>0</p>
                                        <label>USDC</label>
                                    </div>
                                </div>
                                <button className="btn-farm-stake">
                                    Claim reward
                                </button>
                            </div>
                            <div className="info-box">
                                <label className="title">Stake Information</label>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit libero vel ligula lacinia, quis placerat purus condimentum. Etiam ut felis auctor, bibendum velit eu, finibus nisl. Phasellus volutpat, risus nec aliquet elementum, purus ipsum sollicitudin purus, vitae convallis justo orci ut enim. Nullam vitae dignissim nulla. Donec justo tellus, vehicula a libero at, semper aliquam eros. Duis felis orci, sodales sit amet tellus nec, sodales ultrices libero. Proin vel mattis nunc. Suspendisse porttitor lacus sit amet sem mattis, placerat consequat nisi gravida. Praesent nec turpis sit amet velit pharetra lobortis.</p>
                            </div>
                        </div>
                        <div className="stake-box">
                            <div className="box-tabs">
                                <div className={tab === "stake" ? "tab  active" : "tab"} onClick={() => setTab("stake")}>
                                    <span>Stake</span>
                                </div>
                                <div className={tab === "unstake" ? "tab  active" : "tab"} onClick={() => setTab("unstake")}>
                                    <span>Unstake</span>
                                </div>
                            </div>
                            <div className="stake-input">
                                <div className="input-label">
                                    <label>Balance</label>
                                    <label>0 JOE</label>
                                </div>
                                <div className="form-control">
                                    <input
                                        value={stakedAmount}
                                        onChange={(e) => handleStakedAmount(e.target.value)}
                                    />
                                    <button>
                                        MAX
                                    </button>
                                </div>
                            </div>
                            <div className="stake-button">
                                <button className="btn-farm-stake">
                                    {tab}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}