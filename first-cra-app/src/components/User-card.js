import './User-card.css'

import Title from './Title'

const UserCard = props => {

    console.log('Esto son las props:', props)

    const titleText = `Me llamo ${props.name} ${props.lastName}`

    const userImage = props.avatar || 'https://snworksceo.imgix.net/dtc/3f037af6-87ce-4a37-bb37-55b48029727d.sized-1000x1000.jpg'

    return (
        <article class="person-card" style={{ backgroundColor: !props.avatar ? 'rgba(250, 0, 0, .2)' : 'transparent' }}>
            <img src={userImage} />
            <Title text={titleText} />
            <hr />
            <p>Nacido el {props.birth}</p>
        </article>
    )
}

export default UserCard