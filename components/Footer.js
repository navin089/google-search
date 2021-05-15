import PublicIcon from '@material-ui/icons/Public';

function Footer() {
    return (
        <footer className="grid w-full bg-gray-100 ">
            <div className="flex space-x-1 text-gray-500 text-sm px-4 py-3 border-b-2 border-gray-400 ">
                <PublicIcon />
                <p>India</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-around lg:justify-between lg:pl-3 lg:pr-3">
                <div className="flex justify-center space-x-7 p-3 text-sm text-gray-500">
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works?</p>
                </div>
                <div className="flex justify-center space-x-7 p-3 text-sm text-gray-500 md:p-3">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
