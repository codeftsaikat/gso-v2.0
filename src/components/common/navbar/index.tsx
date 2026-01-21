import logo from "@/assets/logo.png"
import { Navigation } from "./navbar"
import RegisterButton from "./register-button"

const Navbar = () => {
    return (
        <div className={`sticky top-0 w-full z-50 bg-white`
        }>
            <div className="flex justify-between items-center container ">
                <div className="w-16 sm:w-24">
                    <img src={logo} />
                </div>
                {/* <div className="w-40">
                <img src="https://lh3.googleusercontent.com/d/1fk91ln_9whUoiV4L9nIw-AT4VMIcYNrj" />
            </div> */}
                <Navigation />

                <RegisterButton />
            </div>
        </div>
    )
}

export default Navbar