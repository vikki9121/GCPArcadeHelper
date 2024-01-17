import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalculator, faBook, faTrophy, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const menuItems = [
    { href: '/pointscalculator', icon: faCalculator, label: 'Points Calculator' },
    { href: '/resources', icon: faBook, label: 'Resources' },
    { href: '/tutorials', icon: faVideo, label: 'Tutorials' },
    { href: '/leaderboard', icon: faTrophy, label: 'Events' },
    { href: '/leaderboard', icon: faTrophy, label: 'Giveaways' },

 
];

const TopbarItem = ({ href, icon, label }) => (
    <li className="inline-block">
        <Link href={href}>
        <div className="flex items-center px-2 py-1 text-base font-normal rounded-lg dark:text-white transition-colors duration-200 cursor-pointer">
  <FontAwesomeIcon icon={icon} className="w-4 h-4 text-gray-600 dark:text-gray-300" />
  <span className="ml-2 text-sm">{label}</span>
</div>

        </Link>
    </li>
);


const Topbar = () => {
    return (
        <nav className="fixed top-[4 rem] left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
            <ul className="flex justify-between items-center p-2 overflow-x-auto">
                {menuItems.map((item, index) => (
                    <TopbarItem key={index} {...item} />
                ))}
            </ul>
        </nav>
    );
};

export default Topbar;
