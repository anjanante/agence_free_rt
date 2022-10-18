import { PropTypes } from "prop-types"

 function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}

//set rules for props
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

//setDefault props
Card.defaultProps = {
    title: 'My default title'
}

export default Card