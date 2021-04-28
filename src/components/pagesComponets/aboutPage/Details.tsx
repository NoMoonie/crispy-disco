import { MdWork } from "react-icons/md";
import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FC } from "react";

interface Detailsinterface {
    professtion: string;
    location: string;
    number: string;
    email: string;
    loading: boolean;
}

const Details: FC<Detailsinterface> = ({ professtion, location, email, number, loading }) => {
    return (
        <section>
            {loading ? <h1>Loading...</h1> : <h1>Details</h1>}
            <p>
                <MdWork /> {professtion}
            </p>
            <p>
                <FaHome /> {location}
            </p>
            <p>
                <FaEnvelope /> {email}
            </p>
            <p>
                <FaPhoneAlt /> {number}
            </p>
        </section>
    );
};

export default Details;
