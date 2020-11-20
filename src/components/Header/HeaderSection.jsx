import React, { Component} from "react";
import styles from "./Header.module.scss";
import { Header, Icon, Image } from 'semantic-ui-react'

class HeaderSection extends Component {

  
  render() {
    return (
      <>
    <div className={styles.header}>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content><h2>Hi {this.props.user.title} {this.props.user.first} {this.props.user.last}</h2></Header.Content>
        <h2>{this.props.tasks} Notes</h2>
      </Header>
          
      </div>
      </>
    );
  }
}

export default HeaderSection;
