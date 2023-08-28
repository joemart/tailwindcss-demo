import MyListBoxItemComponent from "./MyListBoxItemComponent"

export const Layout = ({ children }: { children: React.ReactNode }) => {

    return <main className="main-image">
        <div className="lines-left">

            <svg xmlns="http://www.w3.org/2000/svg" width="386" height="599" viewBox="0 0 386 599" fill="none">
                <path className="lines-left1" d="M294.043 -113L385.766 -35.6246L-149.277 598.628L-241 521.253L294.043 -113Z" fill="#D9D9D9" />
            </svg>

            <svg width="569" height="680" viewBox="0 0 569 680" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="lines-left2" x="476.812" y="-82.6993" width="120" height="896.117" transform="rotate(40.1503 476.812 -82.6993)" fill="#D9D9D9" />
            </svg>

        </div>
        <div className="lines-right">
            <svg className="lines-right1" width="533" height="636" viewBox="0 0 533 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="535.043" width="120" height="829.788" transform="rotate(40.1503 535.043 0)" fill="#D9D9D9" />
            </svg>

            <svg className="lines-right2" width="393" height="555" viewBox="0 0 393 555" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="535.043" width="120" height="829.788" transform="rotate(40.1503 535.043 0)" fill="#D9D9D9" />
            </svg>
        </div>
        {children}
        <div className="sidemenu">
            <MyListBoxItemComponent />
        </div>
    </main>
}

export default Layout