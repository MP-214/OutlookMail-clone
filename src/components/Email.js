import React, { useContext } from "react";

import {
	EmailStyle,
	EmailListStyle,
	AvatarStyle,
	AvatarTextStyle,
	
} from "./styledComponents/EmailStyle";
import { EmailContext } from "../App";
import moment from "moment";

const Email = ({ fav, getId, readList, setReadList, id, dualPanel }) => {

	const markAsRead = (id) => {
		if (!readList.includes(id)) setReadList([...readList, id]);
	};
	//consuming value from provider
	const email = useContext(EmailContext);
	const truncate = (str) => {
		return str?.length > 50 ? str.substr(0, 50 - 1) + "..." : str;
	};
	const capitalizeFirstLetter = (str) => {
		const arr = str.split(" ");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		}
		return arr.join(" ");
	};
	return (
	
			<EmailStyle onClick={() => {
				getId(email.id);
			}}>
				<EmailListStyle
					onClick={() => markAsRead(email.id)}
					className={
						readList.includes(email.id)
							? String(id) === email.id
								? "outline card"
								: "nooutline card"
							: "nooutline cardnocolor"
					}
				>
					<AvatarStyle>
						<AvatarTextStyle>{email.from.name[0]}</AvatarTextStyle>
					</AvatarStyle>
					<div className="email-list">
						<p>
							From:{" "}
							<span className="email-list-heading">
								{" "}
								{capitalizeFirstLetter(email.from.name)} &lt;{email.from.email}
								&gt;{" "}
							</span>
						</p>

						<p className="subject">
							<span>Subject:</span> {email.subject}{" "}
						</p>
						<p>
							{dualPanel
								? truncate(email.short_description)
								: email.short_description}{" "}
						</p>
						<p>
							{moment(new Date(email.date)).format("DD-MM-YYYY  hh:mma")}
							{fav.includes(email.id) ? (
								<button className="colored"> Favorite</button>
							) : (
								<button></button>
							)}
						</p>
					</div>
				</EmailListStyle>
			</EmailStyle>
		
	);
};

export default React.memo(Email);
