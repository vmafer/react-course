import classe from './MeetupItem.module.css';

function MeetupItem(props){
 return (
        <li className={classe.item}>
            <div className={classe.image} >
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classe.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classe.action}>
                <button>To Favorites</button>
            </div>
        </li>

    );
}

export default MeetupItem;