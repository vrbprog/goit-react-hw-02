import css from "./FriendList.module.css";
import FriendListItem from "../friend/FriendListItem";

export default function FriendList({ friends }) {

    return (
        <ul className={css.friends}>
            {
                friends.map(friend => 
                    <FriendListItem
                        key = {friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )
            }
        </ul>
    );
};