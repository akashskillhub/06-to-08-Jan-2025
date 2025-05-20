import Lottie from "lottie-react"
import skillhub from "./../../assets/success.json"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Success = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/user")
        }, 5000)
    }, [])

    return <>
        <div className="d-flex justify-content-center">
            <Lottie
                animationData={skillhub}
                loop={true}
                style={{ width: 400, height: 400 }}
            />
        </div>

    </>
}

export default Success