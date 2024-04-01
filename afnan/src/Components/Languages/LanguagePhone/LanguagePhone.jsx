import React, { useEffect,useState } from 'react'
import { storedLanguage } from '../../../http/api'

const LanguagePhone = () => {
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
        <li className="Linklist__Item">
            <select
                className="LanguageSelect"
                value={lang} onChange={handleLanguageChange}
            >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="az">AZ</option>
            </select>
        </li>
    )
}

export default LanguagePhone
