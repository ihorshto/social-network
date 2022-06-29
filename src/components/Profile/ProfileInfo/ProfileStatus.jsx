import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		}) 
	}

	deactivateEditMode = () =>{
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	componentDidUpdate(prevProps){
		if(prevProps.status !==this.props.status)
		this.setState({
			status: this.props.status
		})
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div className={s.statusSpan}>
						<span onClick={this.activateEditMode}>{this.props.status || "------"}</span>
					</div>
				}
				{this.state.editMode &&
					<div className={s.statusInput}>
						<input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;