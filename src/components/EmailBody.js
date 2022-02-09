import React from "react";
import { OuterBody, AvatarTextStyle } from "./styledComponents/EmailBodyStyles";
import moment from "moment";

const EmailBody = ({ body, email, markAsFav }) => {
	
	return (
		<OuterBody className="card-body">
			<div className="card-body-logo">
				<AvatarTextStyle>{email.from.name[0]}</AvatarTextStyle>
			</div>

			<div className="card-body-container">
				<div className="card-body-heading">
					<span className="card-body-primary-heading">{email.subject}</span>
					<span className="card-body-secondary-heading" onClick={markAsFav}>
						Mark as favourite
					</span>
				</div>

				<span className="card-body-dateformat">
					{moment(new Date(email.date)).format("DD-MM-YYYY  hh:mma")}
				</span>
				<div
					className="card-body-paragraph"
					dangerouslySetInnerHTML={{ __html: body }}
				/>
			</div>
		</OuterBody>
	);
};

export default React.memo(EmailBody);
