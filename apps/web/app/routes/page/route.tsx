import { Link } from "@remix-run/react";

function Test() {
    return(
        <div>
            <div>
                Test
            </div>
            <div>
                <Link to="/"
                className="mr-4 text-12 font-sans font-bold tracking-tight text-gray-300 sm:text-1xl "
                >
                    Back
                </Link>
            </div>
        </div>
    );
}
export default Test;