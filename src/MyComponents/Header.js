const Header = (props) =>
    {
    return (
        <div> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">{props.title}</a>
                </div>
            </nav>
        </div>
        )
    }
export default Header
