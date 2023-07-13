import { useAuth0 } from "@auth0/auth0-react";


export default function NavBar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <img className="h-14" src="logo.png" alt="logo" />
                        </a>
                    </div>
                </div>
                <div>
                    <div
                        className= "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Blog</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">About US</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Contact US</a>
                            </li>
                            <li>                                
                            <button className="bg-blue-500 p-1 px-2 text-white" onClick={() => loginWithRedirect()}>Log In</button>
                            </li>
                            <li>
                            <button className="bg-blue-500 p-1 px-2 text-white" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </nav>
    );
}