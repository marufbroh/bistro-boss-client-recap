import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopulerMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('/public/menu.json')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))
    // }, [])
    const [menu] = useMenu();
    // console.log(menu)
    const populerMenu = menu.filter(item => item.category === 'popular');
    return (
        <section className='container mx-auto my-12'>
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    populerMenu.map((menuItem) => <MenuItem key={menuItem._id} menuItem={menuItem} />)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline mt-6 border-0 border-b-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopulerMenu;