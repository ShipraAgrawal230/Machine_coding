const Interests = ({ formData, setFormData, errors }) => {
    const { Interests } = formData
    const handleChange = (e, item) => {
        setFormData((prev) => ({
            ...prev,
            Interests: e.target.checked ? [...prev.Interests, e.target.value] : prev.Interests.filter((i) => i != e.target.value)
        }))
    }
    return (
        <div>
            <div>
                <label>
                    <input type="checkbox" name="coding" checked={Interests.includes("coding")} value="coding" onChange={handleChange} />
                    Coding
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="music" checked={Interests.includes("music")} value="music" onChange={handleChange} />
                    Music
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="reading" checked={Interests.includes("reading")} value="reading" onChange={handleChange} />
                    Reading
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="fighting" checked={Interests.includes("fighting")} value="fighting" onChange={handleChange} />
                    Fighting
                </label>
            </div>
            {errors.Interests && <span className="error">{errors.Interests}</span>}
        </div>
    )
}
export default Interests