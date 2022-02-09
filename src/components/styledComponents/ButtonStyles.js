import styled from "styled-components";

export const ButtonStyles = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem 6rem;
	font-weight: bold;

	.filter-by {
		font-weight: 700;
		padding-right: 2rem;
		font-size: 1.2rem;
		background: transparent;
		color: #636363;
		padding-top: 2px;
	}
	.buttons {
		background: transparent;
		border: none;
		border-radius: 2rem;
		width: 5em;
		outline: none;
		cursor: pointer;
		font-size: 1.2rem;
		color: #636363;
		font-weight: 600;
		margin-right: 1rem;
	}
	.goback {
		cursor: pointer;
		border: 1px solid #e54065;
		background-color: #e54065;
		color: #fff;
		font-size: 1.2rem;
		margin-left: 1rem;
		border-radius: 1rem;
		padding: 0 1rem;
		font-weight: 600;
	}

	.clicked {
		background-color: #e1e4ea;
		border: 1px solid #cfd2dc;
	}

	input {
		margin-left: 105em;
	}
`;

export const DualPanel = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	padding: 0rem 5rem 2rem 5rem;
	gap: 2rem;

	.dualpanel {
		width: 30vw;
	}

	.nodualpanel {
		width: 90vw;
	}
`;
