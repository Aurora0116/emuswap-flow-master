import { Avatar, AvatarGroup } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { FARMS, TOKENS } from "../../config";

export default function DepositPage() {
    const router = useRouter()
    const [amount, setAmount] = useState(0);
    const handleAmount = (e) => {
        setAmount(e)
    }
    return (
        <main>
            <div className="deposit">
                <div className="deposit-box">
                    <div className="deposit-header">
                        <h2>
                            {FARMS[0].tokens.map((item, key) => (
                                <span key={key}>
                                    {TOKENS.find(x => x.tokenAddress === item.tokenAddress).tokenName}
                                    {key !== FARMS[0].tokens.length - 1 &&
                                        <>-</>
                                    }
                                </span>
                            ))}
                        </h2>
                        <div className="header-icons">
                            <AvatarGroup max={4}>
                                {FARMS[0].tokens.map((item, key) => (
                                    <Avatar alt="" src={TOKENS.find(x => x.tokenAddress === item.tokenAddress).icon} key={key} />
                                ))}
                            </AvatarGroup>
                        </div>
                    </div>
                    <div className="deposit-content">
                        <div className="reward-panel">
                            <div className="reward-item">
                                <h4>Total deposits</h4>
                                <p>$ 23,235,325</p>
                            </div>
                            <div className="reward-item">
                                <h4>Pool rate</h4>
                                <p>4,5454 FLOW / week</p>
                                <p>1,975 tUSDT / week</p>
                            </div>
                        </div>
                        <div className="user-info">
                            <h3>Your liquidity deposits</h3>
                            <h2>0</h2>
                            <h3>Your unclaimed rewards</h3>
                            <h2>0.0000</h2>
                        </div>
                        <div className="deposit-input">
                            <label>Deposit amount</label>
                            <input
                                value={amount}
                                onChange={(e) => handleAmount(e.target.value)}
                            />
                        </div>
                        <button className="btn-farm-stake">
                            Deposit
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}