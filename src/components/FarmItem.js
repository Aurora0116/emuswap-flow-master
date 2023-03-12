import { Avatar, AvatarGroup } from "@mui/material";
import { TOKENS } from "../config";
import { useRouter } from "next/router";

export default function FarmItem({
    tokens,
    totalStaked,
    rewardsPerWeek,
    APY
}) {
    const router = useRouter()
    return (
        <div className="farm-item">
            <div className="farm-item-title">
                <div className="farm-item-icons">
                    <AvatarGroup max={4}>
                        {tokens.map((item, key) => (
                            <Avatar alt="" src={TOKENS.find(x => x.tokenAddress === item.tokenAddress).icon} key={key} />
                        ))}
                    </AvatarGroup>
                </div>
                <div className="tokens-title">
                    {tokens.map((item, key) => (
                        <span key={key}>
                            {TOKENS.find(x => x.tokenAddress === item.tokenAddress).tokenName}
                            {key !== tokens.length - 1 &&
                                <>-</>
                            }
                        </span>
                    ))}
                </div>
            </div>
            <div className="farm-item-content">
                <div className="first-content">
                    <p>Total staked : <span>{totalStaked}</span></p>
                    <p>APY : <span>{APY}</span></p>
                </div>
                <div className="second-content">
                    {/* <div className="content-item">
                        <span>Reward tokens : </span>
                        <AvatarGroup max={4}>
                            {rewardTokens.map((item, key) => (
                                <Avatar alt="" src={TOKENS.find(x => x.tokenAddress === item.tokenAddress).icon} key={key} sx={{ width: 24, height: 24 }} />
                            ))}
                        </AvatarGroup>
                    </div> */}
                    <p>Rewards per week : <span>{rewardsPerWeek}</span></p>
                    <button className="btn-farm-stake" onClick={() => router.push("/farm/deposit")}>
                        deposit
                    </button>
                </div>
            </div>
        </div>
    )
}