type NavbarProps = {
    openBurger: boolean;
    setOpenBurger: any;
}

export const Navbar = ({ openBurger, setOpenBurger }: NavbarProps): React.ReactNode => {


    const isOpenHandle = () => {
        setOpenBurger(!openBurger)
    }

    const NavBarItems = ({ hidden = false }: { hidden?: any }) => {
        return <>
            <div className="navbar-items-container">
                <ol className={`navbar-items ${hidden ? " hidden" : "navbar-items-mobile"}`}>
                    <li >ABOUT</li>
                    <li >ITEM 2</li>
                    <li >ITEM 3</li>
                    <li >ITEM 4</li>
                </ol>
            </div>
        </>
    }

    return <nav className="main-nav navbar-items-color">
        <div className="home-text">HOME</div>
        {/* <NavBarItems /> */}
        {openBurger ? <NavBarItems /> : <NavBarItems hidden />}
        <div onClick={isOpenHandle} className="navbar-burger">
            <svg width="30" height="30" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`transition-[transform] duration-500 ${openBurger ? "translate-x-[5px] translate-y-[-5px] rotate-45" : " "} `} d="M0 2H30" stroke="#89C0F2" strokeWidth="3" />
                <path className={`transition-[opacity] duration-500 ${openBurger ? "opacity-0" : ""}`} d="M0 11H30" stroke="#89C0F2" strokeWidth="3" />
                <path className={`transition-[transform] duration-500 ${openBurger ? "translate-x-[-10px] translate-y-[5px] -rotate-45" : " "}`} d="M0 20H30" stroke="#89C0F2" strokeWidth="3" />
            </svg>
        </div>
    </nav>
}

export default Navbar