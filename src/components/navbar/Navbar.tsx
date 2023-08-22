import "./navbar.scss"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt=""/>
                <span>Addmin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon"/>
                <img src="/app.svg" alt="" className="icon"/>
                <img src="/expand.svg" alt="" className="icon"/>
                <div className="notifications">
                    <img src="/notifications.svg" alt=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" 
                    alt=""/>
                    <span>User0</span>
                </div>
                <img src="/settings.svg" alt="" className="icon"/>
            </div>
        </div>
    )
}

export default Navbar