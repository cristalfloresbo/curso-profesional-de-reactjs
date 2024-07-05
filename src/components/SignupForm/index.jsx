import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

    const handleClearClick = () => {
        setName("");
        setAge("");
        setAddress("");
        setZipcode("");
        setPhone("");
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault(); // hace que no haga su corportamiento habitual que es actualizar el sitio web
        console.log("submit", {
            name,
            age,
            address,
            zipcode,
            phone,
        });
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <label>
                Name
                <input
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Age
                <input
                    value={age}
                    onChange={(evt) => setAge(evt.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Address
                <input
                    value={address}
                    onChange={(evt) => setAddress(evt.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Zipcode
                <input
                    value={zipcode}
                    onChange={(evt) => setZipcode(evt.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Phone
                <input
                    value={phone}
                    onChange={(evt) => setPhone(evt.target.value)}
                    required
                />
            </label>
            <div>
                <button type="button" onClick={handleClearClick}>
                    Clear
                </button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignupForm;
