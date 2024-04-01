import { useState, useEffect } from 'react';
import { storedLanguage } from '../../http/api'
const Languages = ({ isHovered }) => {
    const [lang, setLang] = useState(storedLanguage)
    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value
        setLang(selectedLang)
        localStorage.setItem('lang', selectedLang)
        window.location.reload();
    }
    useEffect(() => {
        const storedLanguage = localStorage.getItem('lang');
        if (storedLanguage) {
            setLang(storedLanguage);
        }
    }, []);

    return (
        <>
            <div className={`hidden-phone ${isHovered ? 'selection-container-blue' : 'selection-container-white'}`}>
                <select value={lang} onChange={handleLanguageChange}>
                    <option value="az">AZ</option>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
                <i className={`fa-solid fa-angle-down  ${isHovered ? 'custom-angle-blue' : 'custom-angle'}`}></i>
            </div>
        </>
    )
}

export default Languages
