import { Link } from "react-router-dom";

const Header = () => {

    const nav_items = [
        {
            name: "Home",
            slug: '/'
        },
        {
            name: "Carees",
            slug: '/carees'
        },
        {
            name: "About us",
            slug: '/about'
        },
        {
            name: "Blog",
            slug: '/blog'
        }
    ]
    return ( 
        <header className="relative overflow-hidden bg-green-100">
                <nav className="container flex justify-between items-center p-6 blur-box shadow-box  mx-auto relative z-10 px-8" >
                    <div>
                        <Link to='/' className="text-green-500 ">Sheq</Link>
                    </div>
                    <div className="flex gap-3 w-2xl justify-end">
                        {
                            nav_items.map((i) => (
                                <Link key={i.name} to={i.slug}>{i.name}</Link>
                            ))
                        }
                    </div>
                </nav>

            

        </header>
    )
}
export default Header;