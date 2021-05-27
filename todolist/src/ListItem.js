import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class ListItem extends Component {
 constructor (props){
	 super(props);

	 this.removeItem = this.removeItem.bind(this);
 }
	removeItem (){
	this.props.parentRemove(this.props.id_item);
	}


	render() {
		return(
	<li>{this.props.item}<Button  color="secondary"  className="delete" onClick={this.removeItem} >
			X</Button></li>
		


		);
	}
}

export default ListItem;
