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
            <div className={`${isHovered ? 'selection-container-blue' : 'selection-container-white'}`}>
                <select value={lang} onChange={handleLanguageChange}>
                    <option value="EN">AZ</option>
                    <option value="RU">EN</option>
                    <option value="FR">RU</option>
                </select>
                <i className={`fa-solid fa-angle-down  ${isHovered ? 'custom-angle-blue' : 'custom-angle'}`}></i>
            </div>
        </>
    )
}

export default Languages
