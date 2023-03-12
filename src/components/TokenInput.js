import { useEffect, useState } from "react"
import { Dialog } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { CloseIcon } from "./svgIcon";
import { TOKENS } from "../config";

export default function TokenInput({ tokenImage, title, onChange, inputTitle }) {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState();
    const handleValue = (amount) => {
        setAmount(amount)
    }
    const [tokenModal, setTokenModal] = useState(false);

    const getDetailData = async () => {
    }

    useEffect(() => {
        getDetailData()
    }, [])

    return (
        <div className="token-input">
            <div className="token-input-title">
                <span>{inputTitle ? inputTitle : "Input"}</span>
                <span>Balance: {balance}</span>
            </div>
            <div className="token-input-form">
                <div className="form-control">
                    <input
                        value={amount}
                        onChange={(e) => handleValue(e.target.value)}
                        placeholder="0.00"
                    />
                    <button className="btn-max">
                        Max
                    </button>
                </div>
                <button className="token-handler" onClick={() => setTokenModal(true)}>
                    {/* eslint-disable-next-line */}
                    <img
                        src={tokenImage}
                        alt=""
                    />
                    <span>{title}</span>
                    <KeyboardArrowDownRoundedIcon />
                </button>
            </div>
            <MarketsModal open={tokenModal} onClose={() => setTokenModal(false)} onChange={(e) => onChange(e)} />
        </div>
    )
}

export function MarketsModal({ open, onClose, onChange }) {
    const [tokenName, setTokenName] = useState("");
    const handleTokenName = (e) => {
        setTokenName(e.target.value)
    }
    const handleChange = (e) => {
        onChange(e);
        onClose();
    }

    return (
        <Dialog
            open={open}
            sx={{
                borderRadius: 24
            }}
        >
            <div className="markets-modal">
                <div className="modal-header">
                    <h3>Select a token</h3>
                    <button className="btn-close" onClick={() => onClose()}>
                        <CloseIcon color="#DFE7ED" />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="default-tokens">
                        <input
                            value={tokenName}
                            onChange={(e) => handleTokenName(e)}
                            placeholder="Search name or paste address"
                            className="tokenname-input"
                        />
                        <div className="common-bases">
                            <p>Common bases</p>
                            <div className="common-bases-content">
                                <button className="btn-token" onClick={() => handleChange(TOKENS[0])}>
                                    <Image
                                        src={TOKENS[0].icon}
                                        alt=""
                                        className="token-icon"
                                        width={24}
                                        height={24}
                                    />
                                    <span>
                                        {TOKENS[0].tokenName}
                                    </span>
                                </button>
                                <button className="btn-token" onClick={() => handleChange(TOKENS[1])}>
                                    <Image
                                        src={TOKENS[1].icon}
                                        alt=""
                                        className="token-icon"
                                        width={24}
                                        height={24}
                                    />
                                    <span>
                                        {TOKENS[1].tokenName}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="tokens-lists">
                        <p>TOKEN NAME</p>
                        <div className="token-items">
                            {TOKENS.map((item, key) => (
                                (item.tokenName.toLocaleLowerCase().indexOf(tokenName.toLocaleLowerCase()) !== -1 ||
                                    item.tokenAddress.toLocaleLowerCase() === tokenName.toLocaleLowerCase()) &&
                                <div className="token-item" key={key} onClick={() => handleChange(item)}>
                                    <button className="token-item-name">
                                        <Image
                                            src={item.icon}
                                            alt=""
                                            className="token-icon"
                                            width={24}
                                            height={24}
                                        />
                                        <span>{item.tokenName}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}