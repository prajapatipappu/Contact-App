
// react hook
import { useEffect } from "react";

// function to fetch data from the api
import { getinitalstate } from "../Redux/Reducers/contactReducer";

// dispatch hook to call function
import { useDispatch} from "react-redux";

// MoreInfo component to show info about a contact
import MoreInfo from "./MoreInfo";
// List component to render the list of contact on page
import List from "./List";


// render the main page
const ContactApp = () => {
    // for dispatching an action
    const dispatch = useDispatch();
    
    // to get the data from the api when the page gets rendered first time
    useEffect(() => {
        dispatch(getinitalstate());
    },[]);


    // render the page
    return(
        // container
        <div className="w-full flex h-full overflow-hidden">

            {/* list component to show the list */}
             <List /> 

            {/* to render the more info section on page */}
            <MoreInfo/> 
        </div>
    )
}

export default ContactApp;