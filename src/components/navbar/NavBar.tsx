import { Link, useLocation } from "react-router-dom"

const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Category", path: "/category" },
    { name: "Item", path: "/item" },
    { name: "Stock", path: "/stock" },
    { name: "Order", path: "/order" },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const location = useLocation()

    return (
        <header className='absolute top-0 flex justify-center items-center body-font z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center'>
                <div className='flex title-font font-medium [text-gray-900 mb-4 md:mb-0'>
                    <Link to='/' className='ml-3 mr-11 font-bold text-white text-3x1'>Portfolio</Link>
                </div>
                <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base text-white justify-center'>
                    <div className="py-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={classNames(
                                    location.pathname === item.path
                                        ? 'bg-white text-blue-900'
                                        : 'hover:bg-white hover:text-blue-900',
                                    'rounded-md px-3 py-2 text-sm font-bold mr-5'
                                )}
                                aria-current={location.pathname === item.path ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <button type="button" className="bg-white uppercase antialiased text-sm px-6 py-3 text-black rounded-2xl hover:bg-blue-300 transition-all duration-300 font-bold">
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default NavBar