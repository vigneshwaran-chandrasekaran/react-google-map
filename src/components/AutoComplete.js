import React, { useState } from 'react';
import Geosuggest from 'react-geosuggest';

export default function AutoComplete() {
	const [suggest, setSuggest] = useState(null);

	function onSuggestSelect(suggest) {
		console.log(suggest);
		setSuggest(suggest);
	}
	return (
		<div>
			<Geosuggest onSuggestSelect={onSuggestSelect} />
			{suggest && (
				<div>
					<p>description: {suggest.description}</p>
					<p>label: {suggest.label}</p>
					<p>lat: {suggest.location.lat}</p>
					<p>lng: {suggest.location.lng}</p>
				</div>
			)}
		</div>
	);
}
