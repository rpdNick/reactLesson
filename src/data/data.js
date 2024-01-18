import logo from '../assets/img/logo.png';
import planeImage from '../assets/img/plane.png';
import girlImage from '../assets/img/girl-banner.png';
import locationImage from '../assets/img/location.png';
import calendarImage from '../assets/img/calendar.png';

const data = {
    header: {    
        logo: logo,
        nav: [
            {link: '', navName: 'Home'},
            {link: '/about', navName: 'About'},
            {link: '/contact', navName: 'Contact'},
            {link: '/blog', navName: 'Blog'}
        ],
        button: {
            text: 'Sign up'
        }
    },
    main: {
        plane: planeImage,
        banner: girlImage,
        button: {
            text: 'Get Update News',
            icon: planeImage
        },
        title: {
            text: 'Your Ultimate Travel Companion'
        },
        description: {
            text: "Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!"
        },
        panel: {
            location: {
                name: 'Paris, France',
                icon: locationImage
            },
            date: {
                datetime: '26 April 2024',
                icon: calendarImage
            },
        }
    },
    footer: {
        copyright: '© 2024 Wunderlustia. All rights reserved.'
    }
}

export default data;