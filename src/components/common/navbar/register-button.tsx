import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


const RegisterButton = () => {
    return (
        <div className="hidden sm:block ">
            <Link to={"https://sciencebaze.com/direct-reg/second-igso"}>

                <Button
                    variant="outline"
                    className="
                    cursor-pointer
        group relative
        bg-white text-neutral-900
        border border-neutral-200
        rounded-full
        px-8 py-6
        text-sm font-medium tracking-wide
        shadow-[0_1px_2px_rgba(0,0,0,0.06)]
        transition-all duration-300 ease-out
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        hover:border-neutral-300
        active:scale-[0.97]
      
      "
                >

                    <span className="relative z-10 irvin">
                        Register Now
                    </span>
                </Button>
            </Link>

        </div>
    )
}

export default RegisterButton