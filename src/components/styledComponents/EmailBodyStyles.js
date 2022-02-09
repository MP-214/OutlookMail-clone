import styled from "styled-components";

export const OuterBody = styled.div`
	display: grid;
	grid-template-columns: 10rem 1fr;
	gap: 1rem;
	border: 1px solid #cfd2dc;
	background-color: #fff;
	margin-bottom: auto;
	border-radius: 10px;

	overflow: hidden;

	.card-body-logo {
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
	
	}
	/* .card-body-logo-name {
		text-transform: uppercase;
	} */
	.card-body-container {
		display: flex;
		margin: 1rem 0;
		flex-direction: column;
		margin-right: 4rem;
	}
	.card-body-heading {
		display: flex;
		margin-bottom: 2rem;
		justify-content: space-between;
	}
	.card-body-primary-heading {
		font-size: 2.5rem;
		font-weight: 700;
		color: #636363;
	}
	.card-body-dateformat {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		font-weight: 400;
		color: #636363;
	}
	.card-body-paragraph {
		font-size: 1.2rem;
		font-weight: 400;
		color: #636363;
	}
	.card-body-secondary-heading {
		font-size: 1rem;
		font-weight: 700;
		padding: 0.2rem 1rem 0.3rem 1rem;
		border: 1px solid #e54065;
		color: #fff;
		background-color: #e54065;
		border-radius: 2rem;
		align-self: center;
		cursor: pointer;
	}
`;
export const AvatarTextStyle = styled.div`
	text-transform: uppercase;
	font-size: 2rem;
	transform: translate(-10%,-12%);
	font-weight: 600;


`;
