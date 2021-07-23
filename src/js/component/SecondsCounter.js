import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	const partial = "000000" + props.seconds.toString();
	const counterOrganization = partial.substr(partial.length - 6).split("");
	let counterDivs = counterOrganization.map((seconds, i) => (
		<div key={i} className="card">
			<div className="card-body text-white">{seconds}</div>
		</div>
	));

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-body text-white">
							<i className="far fa-clock"></i>
						</div>
					</div>
					{counterDivs}
				</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

//const sa = seconds.toString().padStart(6, ‘0’).split(‘’)
