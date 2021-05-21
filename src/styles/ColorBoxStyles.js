import chroma from "chroma-js";
import sizes from "./sizes";
export default {
	ColorBox: {
		width: "20%",
		height: (props) => (props.showingFullPalette ? "25%" : "50%"),
		// margin: "0 auto",
		// display: "inline-block",
		position: "relative",
		cursor: "pointer",
		// marginBottom: "-3.5px",
		"&:hover button": {
			opacity: "1",
			transition: "0.5s",
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: (props) => (props.showingFullPalette ? "20%" : "33.3333%"),
		},
		[sizes.down("md")]: {
			width: "50%",
			height: (props) => (props.showingFullPalette ? "10%" : "20%"),
		},
	},
	copyText: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.7 ? "black" : "white",
	},
	colorName: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.08 ? "white" : "black",
	},
	seeMore: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.7
				? "rgba(0, 0, 0, 0.6)"
				: "white",
		background: (props) =>
			chroma(props.background).luminance() >= 0.7
				? "rgba(0, 0, 0, 0.3)"
				: "rgba(255, 255, 255, 0.3)",
		position: "absolute",
		right: "0",
		bottom: "0",
		width: "60px",
		height: "25px",
		textAlign: "center",
		lineHeight: "25px",
		textTransform: "uppercase",
		borderRadius: "2px",
	},
	copyButton: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.7
				? "rgba(0, 0, 0, 0.6)"
				: "white",
		width: "80px",
		height: "25px",
		display: "inline-block",
		position: "absolute",
		top: "50%",
		left: "50%",
		marginLeft: "-50px",
		marginTop: "-15px",
		outline: "none",
		border: "none",
		background: "rgba(255, 255, 255, 0.3)",
		textAlign: "center",
		fontSize: "1rem",
		lineHeight: "25px",
		textTransform: "uppercase",
		cursor: "pointer",
		textDecoration: "none",
		opacity: "0",
	},
	boxContent: {
		width: "100%",
		position: "absolute",
		left: "0",
		bottom: "0",
		textTransform: "uppercase",
		padding: "10px",
		letterSpacing: "1px",
		color: "black",
		fontSize: "12px",
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transform: "scale(0.1)",
	},
	showOverlay: {
		opacity: "1",
		zIndex: "1",
		transform: "scale(50)",
		position: "absolute",
		transition: "transform 0.6s ease-in-out",
	},
	copyMessage: {
		position: "fixed",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: "0",
		color: "white",
		"& h3": {
			fontWeight: "400",
			textShadow: "1px 2px black",
			background: "rgba(255, 255, 255, 0.3)",
			width: "100%",
			marginBottom: "0",
			textAlign: "center",
			padding: "1rem",
			textTransform: "uppercase",
			[sizes.down("xs")]: {
				fontSize: "5rem",
			},
		},
		"& p": {
			fontSize: "2rem",
			fontWeight: "100",
		},
	},
	showCopyMeassge: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "2",
		transition: "all 0.4s ease-in-out",
		transitionDelay: "0.3s",
	},
};
