const Background = ({ setOpenBurger }: { setOpenBurger: (x: boolean) => void }) => {
    return <div className="main-background" onClick={() => setOpenBurger(false)}>
    </div>
}
export default Background