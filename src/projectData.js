import wcr_image from './Photos/wcr_image.png'
import hashi_image from './Photos/hashi_image.png'
import gigfort_image from './Photos/gigfort_image.png'
import fml_image from './Photos/fml_image.png'

const projects = [
    {
        name: 'The Wellington Coffee Review',
        url: 'https://welly-coffee-review-8eda1.web.app/',
        image:wcr_image,
        techStack: 'React, Firebase, CSS',
        blurb: 'A cafe review website for Wellingtons, loosely based on TripAdvisor. Yay coffee.'
    },
    {
        name: 'Hashigo Zake website',
        url: 'https://hashigo-zake.herokuapp.com/',
        image:hashi_image,
        techStack: 'React,CSS, MailChimp',
        blurb: "A website for one of Wellington's best craft beer bars"
    },
    {
        name: 'Gig Fort',
        url: 'gigfort.nz',
        image:gigfort_image,
        techStack: 'React,Firebase,CSS, Day.js',
        blurb: "A comprehensive, clear weekly guide for Wellington's live music"
    },
    {
        name: 'Follow My Lead',
        url: 'http://f-m-l.herokuapp.com',
        image:fml_image,
        techStack: 'React,CSS, Express,SQLite3',
        blurb: "My final group project for Dev Academy. An app that pairs dog walkers with dog owners. Ruff."
    }
]

export default projects