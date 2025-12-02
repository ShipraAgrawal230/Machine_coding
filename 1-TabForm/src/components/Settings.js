const Settings = ({ formData, setFormData, errors }) => {
    const { theme } = formData

    const handleChange = (e) => {
        setFormData((prev) => (
            {
                ...prev,
                theme: e.target.value
            }
        ))
    }
    return (
        <div>
            <div>
                <label>
                    <input type="radio" name="theme" checked={theme == "dark"} onChange={handleChange} value={"dark"} />
                    Dark
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="theme" checked={theme == "light"} onChange={handleChange} value={"light"} />
                    Light
                </label>
            </div>
            {errors.theme && <span className="error">{errors.theme}</span>}
        </div>
    )
}
export default Settings