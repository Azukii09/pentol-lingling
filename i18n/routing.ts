import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'id'],

    // Used when no locale matches
    defaultLocale: 'id',

    pathnames: {
        // dashboard
        '/admin/dashboard': {
            id:'/admin/beranda'
        },

        // dashboard
        '/admin/users': {
            id:'/admin/pengguna'
        },
    }
});