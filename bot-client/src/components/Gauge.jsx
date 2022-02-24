import { useRageContext } from '../context/RageContext';

export default function Gauge() {
	const rage = useRageContext();
	const gauge_mask_ratio = (100 - rage) / 100;
	const _width = `calc(${gauge_mask_ratio} * 100%)`;
	const gauge_mask = {
		display: 'flex',
		position: 'absolute',
		right: '0',
		top: '0',
		width: _width,
		height: '52px',
		background: 'lightgray',
		transitionDuration: '2s',
	};
	const gauge_frame = {
		display: 'flex',
		position: 'relative',
		width: '100%',
		height: '50px',
		background: 'linear-gradient(to right, yellow, red)',
		borderRadius: '8px',
		overflow: 'hidden',
	};
	const text = {
		fontSize: '14px',
		color: 'white',
		fontWeight: 'bold',
		width: '20%',
		textAlign: 'center',
		whiteSpace: 'nowrap',
	};
	const text_frame = {
		display: 'flex',
		position: 'relative',
		flex_direction: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '700px',
		height: '50px',
	};

	return (
		<div className="drop-shadow-lg" style={gauge_frame}>
			<div style={gauge_mask}></div>
			<div style={text_frame}>
				<div style={text}>소노</div>
				<div style={text}>중노</div>
				<div style={text}>대노</div>
				<div style={text}>극대노</div>
				<div style={text}>니머라켓노</div>
			</div>
		</div>
	);
}
