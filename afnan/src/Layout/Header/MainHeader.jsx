import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../pages/components/Button/Button';
import { useLocation } from 'react-router-dom';
import Languages from '../../Components/Languages/Languages';
import axios from 'axios';
import config from '../../config';
import { storedLanguage } from '../../http/api';
import LanguagePhone from '../../Components/Languages/LanguagePhone/LanguagePhone';
const MainHeader = ({ handleWishListOpen, handleCheckOut }) => {
    const location = useLocation();

    const isPage = location.pathname.startsWith('/detail')
        || location.pathname.startsWith('/videos')
        || location.pathname.startsWith('/blog')
        || location.pathname.startsWith('/about')
        || location.pathname.startsWith('/contact')
        || location.pathname.startsWith('/distributors')
        || location.pathname.startsWith('/stores')
        || location.pathname.startsWith('/search')
        || location.pathname.startsWith('/login')
        || location.pathname.startsWith('/register')
        || location.pathname.startsWith('/checkout')
        || location.pathname.startsWith('/social')
        || location.pathname.startsWith('/card')
        || location.pathname.startsWith('/all-products');

    const [isHovered, setIsHovered] = useState(isPage);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isHoveredLi, setIsHoveredLi] = useState(false);
    const [isHoveredLiKey, setIsHoveredLiKey] = useState('');
    const [dropMenu, setDropMenu] = useState(false);
    const [dropMenukey, setDropMenukey] = useState(false);
    const [menuItemId, setMenuItemId] = useState(false);

    // const handleDropMenuId = (menuItemId) => {
    //     setMenuItemId(menuItemId)
    // }
    const handleDropMenu = (key) => {
        setDropMenukey(key)
        setDropMenu(prev => !prev)
    }
    const handleMouseEnterLi = (key) => {
        setIsHoveredLiKey(key)
        setIsHoveredLi(true);
    };

    const handleMouseLeaveLi = () => {
        setIsHoveredLi(false);
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isScrolled && !isPage) {
            setIsHovered(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 30;
            setIsHovered(scrolled)
            setIsScrolled(scrolled)
            if (isPage) {
                setIsHovered(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openSideBarFunc = () => {
        setOpenSideBar(true);
        document.body.classList.add('no-scroll');
    }

    const closeSideBarFunc = () => {
        console.log("ok")
        setOpenSideBar(false)
        document.body.classList.remove('no-scroll');
    }


    // get data

    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const fetchdataFunc = async () => {
            try {
                const menuItems = await axios.get(`${config.development.api}/categories?lang=${await storedLanguage()}`);
                const menuItemsData = menuItems.data;
                setMenuItems(menuItemsData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchdataFunc()
    }, [])
    useEffect(() => {
        menuItems.forEach(linklist => {
            if (linklist.parent_id === null) {
                const isdropdownElement = document.getElementById(`Linklist${linklist.name}`).firstElementChild;
                const isdropMobile = document.getElementById(`Collapsible__Content${linklist.name}`);
                if (isdropdownElement != null) {
                    isdropdownElement.parentElement.parentElement.parentElement.firstElementChild.addEventListener('click', function (event) {
                        event.preventDefault();
                    });
                    if (isHoveredLiKey === linklist.id) {
                        const dropdownElement = document.getElementById(`Linklist${linklist.name}`).parentElement;
                        dropdownElement.classList.toggle('custom-DropdownMenu')
                    }
                }
                if (isdropMobile.firstElementChild == null) {
                    isdropMobile.parentElement.previousElementSibling.firstElementChild.classList.add('none-plus')
                } else {
                    isdropMobile.parentElement.previousElementSibling.addEventListener('click', function (event) {
                        event.preventDefault();
                    });
                }
            }
        });
    }, [menuItems, isHoveredLi])
    return (
        <>
            {
                <div className='shopify-section shopify-section--header custom-shopify-section--header' id='shopify-section-sidebar-menu'>
                    <div className='Search' id='Search' aria-hidden="true">
                        <div className='Search__Inner'>
                            <div className='Search__SearchBar'>
                                <form action="" name='GET' role="search" className='Search__Form'>
                                    <div className='Search__InputIconWrapper'>
                                        <span className='hidden-tablet-and-up'>
                                            <svg className="Icon Icon--search" role="presentation" viewBox="0 0 18 17">
                                                <g transform="translate(1 1)" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                    <path d="M16 16l-5.0752-5.0752"></path>
                                                    <circle cx="6.4" cy="6.4" r="6.4"></circle>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="hidden-phone">
                                            <svg className="Icon Icon--search-desktop" role="presentation" viewBox="0 0 21 21">
                                                <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                    <path d="M18 18l-5.7096-5.7096"></path>
                                                    <circle cx="7.2" cy="7.2" r="7.2"></circle>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <input type="search" className='Search__Input Heading' name='q' autoComplete='off' autoCorrect='off' placeholder='Search' autoFocus />
                                    <input type="hidden" name='type' defaultValue="product" />
                                </form>
                                <button className='Search__Close Link Link--primary' data-action='close-search'>
                                    <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className='Search__Results'>
                                <div className='PageLayout PageLayout--breakLap'>
                                    <div className='PageLayout__Section'></div>
                                    <div className='PageLayout__Section PageLayout__Section--secondary'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header id='section-header' className={`Header Header--initialized Header--withIcons Header--center Header--transparent  ${isHovered ? '' : 'custom-Header--bg'}`}
                        data-section-id="header" data-section-type="header" role='banner'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='Header__Wrapper'>
                            <div className='Header__FlexItem Header__FlexItem--fill flex-1'>
                                <button className={`Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk ${isHovered ? 'icon--transparent' : 'icon--primary'}`} onClick={openSideBarFunc}>
                                    <span className="hidden-tablet-and-up">
                                        <svg className="Icon Icon--nav" role="presentation" viewBox="0 0 20 14">
                                            <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    <span className='hidden-phone'>
                                        <svg className="Icon Icon--nav-desktop" role="presentation" viewBox="0 0 24 16">
                                            <path d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </button>
                                <nav className='Header__MainNav hidden-pocket hidden-lap '>
                                    <ul className='HorizontalList HorizontalList--spacingExtraLoose'>
                                        {menuItems.map((menuItem) => (
                                            <React.Fragment key={menuItem.id}>
                                                {menuItem.parent_id === null && (
                                                    <li key={menuItem.id} className={`HorizontalList__Item ${(isHoveredLi && isHoveredLiKey === menuItem.id) ? 'is-expanded' : ''}`} onMouseEnter={() => handleMouseEnterLi(menuItem.id)} onMouseLeave={handleMouseLeaveLi}>
                                                        <Link to={`/${menuItem.slug}`} className={`Heading u-h6 ${isHovered ? 'custom-color-hover' : 'custom-color'}`}>
                                                            {menuItem.name}
                                                            <span className="Header__LinkSpacer">
                                                                {menuItem.name}
                                                            </span>
                                                        </Link>
                                                        <div className={`DropdownMenu`}>
                                                            <ul className='Linklist' id={`Linklist${menuItem.name}`}>
                                                                {menuItems.filter(element => element.parent_id === menuItem.id).map((subItem) => (
                                                                    <li key={subItem.id} className='Linklist__Item' >
                                                                        <Link to={`/pages/${subItem.slug}/${subItem.id}`} className='Link Link--secondary' >{subItem.name}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className='Header__FlexItem Header__FlexItem--logo flex-5'>
                                <h1 className='Header__Logo'>
                                    <Link to='/' className='Header__LogoLink'>
                                        <img className={`Header__LogoImage ${isHovered ? 'Header__LogoImage--primary' : 'Header__LogoImage--transparent'}`} src="/images/blue.avif" alt="" />
                                        <img className={`Header__LogoImage ${isHovered ? 'Header__LogoImage--transparent' : 'Header__LogoImage--primary'}`} src="/images/white.avif" alt="" />
                                    </Link>
                                </h1>
                            </div>
                            <div className='Header__FlexItem Header__FlexItem--fill flex-5'>
                                <Link to='/login' className={`Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone ${isHovered ? 'icon--transparent' : 'icon--primary'}`}>
                                    <svg className={`Icon Icon--account ${isHovered ? 'icon--transparent' : 'icon--primary'}`} role="presentation" viewBox="0 0 20 20">
                                        <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                                            <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                            <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                        </g>
                                    </svg>
                                </Link>
                                <Link to='/search' className={`Header__Icon Icon-Wrapper Icon-Wrapper--clickable ${isHovered ? 'icon--transparent' : 'icon--primary'}`}>
                                    <span className='hidden-tablet-and-up'>
                                        <svg className={`Icon Icon--search ${isHovered ? 'icon--transparent' : 'icon--primary'}`} role="presentation" viewBox="0 0 18 17">
                                            <g transform="translate(1 1)" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                <path d="M16 16l-5.0752-5.0752"></path>
                                                <circle cx="6.4" cy="6.4" r="6.4"></circle>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className='hidden-phone'>
                                        <svg className={`Icon Icon--search-desktop ${isHovered ? 'icon--transparent' : 'icon--primary'}`} role="presentation" viewBox="0 0 21 21">
                                            <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                                                <path d="M18 18l-5.7096-5.7096"></path>
                                                <circle cx="7.2" cy="7.2" r="7.2"></circle>
                                            </g>
                                        </svg>
                                    </span>
                                </Link>
                                <Link onClick={handleCheckOut} className={`Header__Icon Icon-Wrapper Icon-Wrapper--clickable ${isHovered ? 'icon--transparent' : 'icon--primary'}`} data-action="open-drawer" data-drawer-id="sidebar-cart" aria-expanded="false" aria-label="Open cart">
                                    <span className='hidden-tablet-and-up'>
                                        <svg className={`Icon Icon--cart ${isHovered ? 'icon--transparent' : 'icon--primary'}`} role="presentation" viewBox="0 0 17 20">
                                            <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    <span className='hidden-phone'>
                                        <svg className={`Icon Icon--cart-desktop ${isHovered ? 'icon--transparent' : 'icon--primary'}`} role="presentation" viewBox="0 0 19 23">
                                            <path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    <span className={`Header__CartDot is-visible ${isHovered ? 'icon--transparent' : 'icon--primary'}`}></span>
                                </Link>
                                <Link onClick={handleWishListOpen} className={`Header__Icon hidden-phone Icon-Wrapper Icon-Wrapper--clickable ${isHovered ? 'icon--transparent' : 'icon--primary'}`} data-action="open-drawer" data-drawer-id="sidebar-cart" aria-expanded="false" aria-label="Open cart">
                                    <i className="fa-regular fa-heart custom-heart"></i>
                                </Link>
                                <Languages isHovered={isHovered} />
                            </div>
                        </div>
                    </header>
                </div>
            }

            <div className='shopify-section' id='shopify-section-popup'>
                <section id='sidebar-menu' className={`SidebarMenu Drawer Drawer--small Drawer--fromLeft  ${openSideBar ? 'custom-visibility' : ''}`}>
                    <header className='Drawer__Header custom-Drawer__Header'>
                        <button className='Drawer__Close Icon-Wrapper--clickable ' onClick={closeSideBarFunc}>
                            <i className="fa-solid fa-xmark icon-size" ></i>
                        </button>
                    </header>
                    <div className={`Drawer__Content`}>
                        <div className='Drawer__Main ' >
                            <div className='Drawer__Container custom-data-scrollable'>
                                <nav className='SidebarMenu__Nav SidebarMenu__Nav--primary'>
                                    {
                                        menuItems.map((menu) => (
                                            <div className='Collapsible' key={menu.id}>
                                                {menu.parent_id === null && (
                                                    <div>
                                                        <Link to={`/${menu.slug}`} aria-expanded={(dropMenukey == menu.id && dropMenu) ? true : false} className={`Collapsible__Button Heading u-h6 ${(dropMenukey == menu.id && dropMenu) ? 'custom-area-expanded-true' : ''}`} >
                                                            {menu.name}
                                                            <span className='Collapsible__Plus' onClick={() => { handleDropMenu(menu.id); }}></span>
                                                        </Link>
                                                        <div className={`Collapsible__Inner ${(dropMenukey == menu.id && dropMenu) ? 'custom-Collapsible__Inner_menu' : 'custom-Collapsible__Inner_menu_hidden'}`}>
                                                            <div className='Collapsible__Content' id={`Collapsible__Content${menu.name}`}>
                                                                {menuItems.filter(element => element.parent_id === menu.id).map((subItem) => (
                                                                    <div key={subItem.name} className='Collapsible' onClick={closeSideBarFunc}>
                                                                        <Link to={`/pages/${subItem.slug}/${subItem.id}`} className='Collapsible__Button Heading Text--subdued Link Link--primary u-h7'  >{subItem.name}</Link>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    }
                                </nav>
                                <nav className="SidebarMenu__Nav SidebarMenu__Nav--secondary">


                                    <ul className="Linklist Linklist--spacingLoose">
                                        <LanguagePhone />
                                        <li onClick={closeSideBarFunc} className="Linklist__Item">
                                            <Link to="/about" className="Text--subdued Link Link--primary" >My Wishlist</Link>
                                        </li>
                                        <li onClick={closeSideBarFunc} className="Linklist__Item">
                                            <Link to="/about" className="Text--subdued Link Link--primary">About Us</Link>
                                        </li>
                                        <li onClick={closeSideBarFunc} className="Linklist__Item">
                                            <Link to="/contact" className="Text--subdued Link Link--primary">Contact Us</Link>
                                        </li>
                                        <li onClick={closeSideBarFunc} className="Linklist__Item">
                                            <Link to="/stores" className="Text--subdued Link Link--primary">Our Stores</Link>
                                        </li>
                                        <li onClick={closeSideBarFunc} className="Linklist__Item">
                                            <Link to="/search" className="Text--subdued Link Link--primary">Search</Link>
                                        </li>
                                        <li onClick={closeSideBarFunc} className="Linklist__Item">
                                            <Link to="/account" className="Text--subdued Link Link--primary">Account</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div onClick={closeSideBarFunc} className={`PageOverlay ${openSideBar ? 'is-visible' : ''}`}></div>
        </>
    )
}

export default MainHeader
