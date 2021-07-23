import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	const partial = "000000" + props.seconds.toString();
	const counterOrganization = partial.substr(partial.length - 6).split("");
	let counterDivs = counterOrganization.map((seconds, i) => (
		<div key={i} className="col">
			<div className="card">
				<div className="card-body">{seconds}</div>
			</div>
		</div>
	));

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div class="card">
						<div class="card-body">
							<i className="far fa-clock"></i>
						</div>
					</div>
				</div>
				{counterDivs}
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

//const sa = seconds.toString().padStart(6, ‘0’).split(‘’)
