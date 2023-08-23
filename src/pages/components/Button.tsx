import { NextPage } from "next";

interface BUB {
    size?: 'large' | 'medium' | 'small';
    variants?: 'contained' | 'outlined' | 'text';
    fullWidth?: boolean;
    children: React.ReactNode
}

export const Button: NextPage<BUB> = ({ size, variants, fullWidth, children }: BUB) => {

    return <button className={"bg-[#345] rounded-[10px] box-border p-3 transition active:bg-[#389]"}>
        {children}</button>
}

export default Button