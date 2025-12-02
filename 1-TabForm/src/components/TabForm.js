import { useState } from "react"
import Interests from "./Interests"
import Profile from "./Profile"
import Settings from "./Settings"

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [formData, setFormData] = useState({
        name: "Shipra",
        age: 23,
        email: "shipra@gmail.com",
        Interests: ["coding", "movies", "music"],
        theme: "dark"
    })
    const [errors, setErrors] = useState({})

    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const err = {}
                if (!formData.name || formData.name.length < 2) {
                    err.name = "Please enter a valid name"
                }
                if (!formData.age || formData.age < 18) {
                    err.age = "Please enter a valid age"
                }
                if (!formData.email || formData.email.length < 5) {
                    err.email = "Please enter a valid email"
                }
                setErrors(err)
                return err.name || err.age || err.email ? false : true
            }
        },
        {
            name: "Interests",
            component: Interests,
            validate: () => {
                const err = {}
                if (!formData.Interests || formData.Interests.length < 1) {
                    err.Interests = "Please select atleast one Interest"
                }
                setErrors(err)
                return err.Interests ? false : true
            }
        },
        {
            name: "Settings",
            component: Settings,
            validate: () => {
                const err = {}
                if (!formData.theme) {
                    err.name = "Please select theme"
                }
                setErrors(err)
                return err.theme ? false : true
            }
        }
    ]

    const handleNextClick = () => {
        if(tabs[activeTab].validate())
        setActiveTab((prev) => prev + 1)
    }

    const handlePrevClick = () => {
        if(tabs[activeTab].validate())
        setActiveTab((prev) => prev - 1)
    }
    const handleSubmitClick = () => {
        console.log(formData)
    }

    const ActiveTabComponent = tabs[activeTab].component
    return (
        <div>
            <div className="heading-container">
                {
                    tabs.map((tab, index) =>
                        <div key={tab.name} className="heading" onClick={() => { setActiveTab(index) }}>{tab.name}</div>
                    )
                }
            </div>
            <div className="tab-body">
                <ActiveTabComponent formData={formData} setFormData={setFormData} errors={errors} />
            </div>
            <div>
                {
                    activeTab > 0 &&
                    <button onClick={handlePrevClick}>Prev</button>
                }
                {
                    activeTab < tabs.length - 1 &&
                    <button onClick={handleNextClick}>Next</button>
                }
                {
                    activeTab === tabs.length - 1 &&
                    <button onClick={handleSubmitClick}>Submit</button>
                }
            </div>
        </div>
    )
}
export default TabForm