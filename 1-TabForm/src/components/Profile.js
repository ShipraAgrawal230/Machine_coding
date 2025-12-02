const Profile = ({ formData, setFormData, errors }) => {
    const { name, age, email } = formData

    const handleChange = (e, item) => {
        setFormData((prev) => ({
            ...prev,
            [item]: e.target.value
        }))
    }
    return (
        <div>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => { handleChange(e, "name") }} />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => { handleChange(e, "age") }} />
                {errors.age && <span className="error">{errors.age}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => { handleChange(e, "email") }} />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
        </div>
    )
}
export default Profile