import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollow = () => {
    return(`
        
        <ul id="follows-group" className="list-group">
        <li class="list-group-item"><h4>Who to follow</h4></li>
                     ${
                    who.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
        </ul>
    `);
}
export default WhoToFollow;
$('#wd-whoToFollow').append(WhoToFollow());