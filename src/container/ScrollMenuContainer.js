import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const ScrollMenuContainer = (menuItems) => {
    const [selected, setSelected] = useState('Istanbul');
    const dispatch = useDispatch();
    const selectedCity = useSelector(state => state.selectedCity)
    
    const list = [
        { name: 'istanbul' },
        { name: 'Tokyo' },
        { name: 'Newyork' },
        { name: 'Los angeles' },
        { name: 'Berlin' },
        { name: 'San Francisco' },
        { name: 'Rio' },
        { name: 'Toronto' },
        { name: 'Sdyney' },
        { name: 'Cape Town'},
        { name: 'Nepal' },
        { name: 'Budapest' },
        { name: 'Beograd' },
        { name: 'Viyana' }
    ];
    
    const MenuItem = ({ text }) => {
        return <div className="ui medium header" style={menuItem}>{text}</div>
    };
    
    const Menu = (list) =>
    list.map(el => {
      const {name} = el;
   
      return <MenuItem text={name} key={name} />;
    });
    
    const onSelect = (key) => {
        setSelected(key);
        dispatch({type: 'SELECTED_CITY', payload: selected});
    }

    const items = Menu(list, selected);

    return (
        <div>
            <div class="ui divider"></div>
                <div>
                    <ScrollMenu
                        data={items}
                        selected={selected}
                        onSelect={onSelect}
                    />
                </div>
            <div class="ui divider"></div>
        </div>
    );
};

const menuItem = {
    padding: '0 40px',
    margin: '20px 10px',
    cursor: 'pointer',
    border: 'none',
}



export default ScrollMenuContainer;
