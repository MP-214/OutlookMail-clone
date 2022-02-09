import styled from "styled-components";

export const EmailStyle = styled.div`

	
	span {
		font-weight: lighter;
	}
	button {
		background: transparent;
		outline: none;
		border: none;
	}
	.email-list-heading {
		font-weight: 700;
	}
	.email-list {
		margin-top: 1rem;
	}
	.email-list :is(span, p) {
		font-size: 1.3rem;
		margin: 0;
	}
	.email-list p:nth-child(3) {
		margin: 1rem 0;
	}
	.email-list p:last-child {
		margin-bottom: 1rem;
	}
	.dualpanel {
		margin-left: 1vw;
		margin-right: 1vw;
		margin-bottom: 1vw;
		width: 30vw;
	}
	.outline {
		border: 1px solid #e54065 !important;
		border-radius: 1rem;
		outline: #e54065;
	}
	.nooutline {
		outline: none;
	}
	.subject {
		font-weight: bold;
	}
	.card {
		color: #636363;
		background-color: #f2f2f2;
		border: 1px solid #cfd2dc;

		border-radius: 1rem;
	}
	.card:active {
		outline: #e54065;
	}
	.cardnocolor {
		color: #636363;
		background-color: #fff;
		border: 1px solid #cfd2dc;

		border-radius: 1rem;
	}
	.cardnocolor:active {
		outline: #e54065;
	}
	.colored{
		color:#e54065;
		font-size:1rem;
		font-weight:bold
	}
`;

export const EmailListStyle = styled.div`
	display: grid;
	grid-template-columns: 6rem 1fr;
	gap: 2rem;
	border: 1px solid #cfd2dc;
	background-color: #fff;
	margin-bottom: 2rem;
	border-radius: 1rem;
	cursor: pointer;
`;

export const AvatarStyle = styled.div`
	border: 1px solid #e54065;
	border-radius: 50%;
	background-color: #e54065;
	display:flex;
	justify-content:center;
	align-items:center;
	margin: 1rem 2rem 5rem 2rem;
	color: #fff;
	height: 4rem;
	width: 4rem;

`;
export const AvatarTextStyle = styled.div`
	font-size: 2rem;

	transform: translate(-10%,-12%);
	font-weight: 600;
	text-transform: uppercase;
`;


