import React, { useState } from 'react'

function TextArea() {
	const [text, setText] = useState("");

	function handleTextChange(e) {
		setText(e.target.value);
	}

	return (<div>
				<textarea value={text} onChange={handleTextChange}/>
				<p>{text.length}</p>
			</div>);

}

export default TextArea