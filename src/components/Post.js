import { Link } from 'react-router-dom'

export default function Post(props) {
    return (
        <div className="post">
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <p>{props.post.dateCreated?.toDate().toString()}</p> {/* Optional Chaining! */}
            <p>Posted By: {props.post.username}</p>
            
            {
                (props.hideLink) ?
                <></> :
                <Link to={ `/post/${props.post.uid}/${props.post.id}` }>Read More</Link>
            }
        </div>
    )
}