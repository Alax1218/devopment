import React from 'react'
const AccountDetails = React.lazy(() => import('./Components/Account'))
const Personal = React.lazy(() => import('./Components/Personal'))
const ProfileTab = React.lazy(() => import('./Components/ProfileTab'))
const ProgramsPage = React.lazy(() => import('./Components/Programs'))
const SupportPage = React.lazy(() => import('./Components/Support'))

const routes = [
    {
        path: 'personal',
        exact: true,
        component: Personal,
        name: 'Personal',
        icon: 'la:id-card',
    },
    {
        path: 'profile',
        exact: true,
        component: ProfileTab,
        name: 'Profile',
        icon: 'bi:person-fill',
    },
    {
        path: 'programs',
        exact: true,
        component: ProgramsPage,
        name: 'Programs',
        icon: 'ant-design:schedule-filled',
    },
    {
        path: 'support',
        exact: true,
        component: SupportPage,
        name: 'Support',
        icon: 'bx:support',
    },
]

export default routes
