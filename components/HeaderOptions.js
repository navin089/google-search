import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
 

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base
        lg:justify-start lg:space-x-36 lg:pl-40 border-b-[1px]">
            {/*Left */}
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={OndemandVideoIcon} title="Videos"/>
                <HeaderOption Icon={ChromeReaderModeIcon} title="News"/>
                <HeaderOption Icon={ImageIcon} title="Images"/>
                <HeaderOption Icon={LocalOfferIcon} title="Shopping"/>
                <HeaderOption Icon={MoreVertIcon} title="More"/>   
            </div>

            {/*Right */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
