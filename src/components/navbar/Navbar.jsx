import "./navbar.scss"
 import PersonIcon from "@material-ui/icons/Person";
 import MailIcon from "@material-ui/icons/Mail";
export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + ( menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Lakehal.</a>
                    <div className="itemContainer"> 
                    <PersonIcon className="icon"/>
                    <span>+1 407 910 3352</span>
                    </div>
                    <div className="itemContainer"> 
                    <MailIcon className="icon"/>
                    <span>contact@khaledlakehal.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
