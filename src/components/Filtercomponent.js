import React,{useState,useEffect} from 'react'


import {
	ButtonStyles,
	} from "./styledComponents/ButtonStyles";
const FilterComponent = ({setEmailsToBeSent,isMounted,emails,dualPanel,setDualPanel,fav,readList}) => {
    

	const [forRead, setForRead] = useState(false);
	const [unread, setUnread] = useState(false);
	const [forFav, setForFav] = useState(false);
    

	useEffect(() => {
		if (isMounted) {
			const filterByFav = emails.filter((email) => {
				return fav.includes(email.id);
			});

			forFav && setEmailsToBeSent(filterByFav);
			!forFav && setEmailsToBeSent(emails);
		}
	}, [emails, fav, forFav, isMounted, setEmailsToBeSent]);

	useEffect(() => {
		if (isMounted) {
			const filterByUnread = emails.filter((email) => {
				return !readList.includes(email.id);
			});

			unread && setEmailsToBeSent(filterByUnread);
			!unread && setEmailsToBeSent(emails);
		}
	}, [emails, isMounted, readList, setEmailsToBeSent, unread]);

	useEffect(() => {
		if (isMounted) {
			const filterByRead = emails.filter((email) => {
				return readList.includes(email.id);
			});

			forRead && setEmailsToBeSent(filterByRead);
			!forRead && setEmailsToBeSent(emails);
		}
	}, [emails, forRead, isMounted, readList, setEmailsToBeSent]);

    return (
    <ButtonStyles>
        <span className="filter-by">Filter By: </span>
        <button
            className={unread ? "buttons clicked" : "buttons"}
            onClick={() => setUnread(!unread)}
        >
            {" "}
            Unread{" "}
        </button>
        <button
            className={forRead ? "buttons clicked" : "buttons"}
            onClick={() => setForRead(!forRead)}
        >
            {" "}
            Read{" "}
        </button>
        <button
            className={forFav ? "buttons clicked" : "buttons"}
            onClick={() => setForFav(!forFav)}
        >
            {" "}
            Favorites{" "}
        </button>
        {dualPanel && (
            <button className="goback" onClick={() => setDualPanel(!dualPanel)}>
                Back
            </button>
        )}
    
    </ButtonStyles>)
}
 
export default FilterComponent;