import React from "react";
import classes from '../Layout/Layout.module.scss';
import { Outlet } from "react-router-dom";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { connect } from "react-redux";

class Layout extends React.Component {

  state = {
    menu: false
  }
  
  toggleMenuHelndler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return(
      <div className={classes.Layout}>

        <Drawer 
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />

        <MenuToggle
          onToggle={this.toggleMenuHelndler}
          isOpen={this.state.menu}
        />

        <>
          <main>
            <Outlet />
          </main>
        </>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout)