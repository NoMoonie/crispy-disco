import { MdWork } from "react-icons/md";
import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Details = () => {
    return (
        <section>
            <h1>Details</h1>
            <p>
                <MdWork /> Programmer
            </p>
            <p>
                <FaHome /> Sweden, skåne
            </p>
            <p>
                <FaEnvelope /> ex@email.com
            </p>
            <p>
                <FaPhoneAlt /> +46 703 - 30 40 20
            </p>
        </section>
    );
};

export default Details;
