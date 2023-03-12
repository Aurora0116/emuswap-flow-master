import Image from "next/image";
import { useRouter } from "next/router";

export default function StakeItem() {
    const router = useRouter()
    return (
        <div className="stake-item" onClick={() => router.push("/stake/detail")}>
            <div className="stake-item-header">
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
            <div className="stake-item-content">
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
    )
}