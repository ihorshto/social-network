import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.state)

	useEffect( () => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	} 

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

		return (
			<div>
				{!editMode &&
					<div className={s.statusSpan} >
						<span onClick={activateEditMode}>{props.status || "------"}</span>  
					</div>
				}
				{editMode &&
					<div className={s.statusInput} >
						<input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode} />
					</div>
				}
			</div>
		)
}

export default ProfileStatusWithHooks;