import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";

class ProfileContainerClass extends React.Component {

    componentDidMount() {
        // debugger;
// using useParams
        // let { userId } = this.props.params;
        // if (userId === undefined) {
        //     userId = '22517';
        // }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
//using useMatch
    //     let userId = this.props.match ? this.props.match.params.userId : '22517';
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //         .then(({ data }) => {
    //             this.props.setUserProfile(data);
    //         });
    // }
        let userId = this.props.match ? this.props.match.params.userId : '22517';
        this.props.getUserProfile(userId);
    }

    render () {
        return (<div>
                <Profile { ...this.props } profile = { this.props.profile } />
            </div>
        );
    };
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

// using useParams
// const ProfileContainer = (props) => (<ProfileContainerClass { ...props } params = { useParams } /> );

const ProfileContainer = (props) => {
    const match = useMatch("/profile/:userId/");
	return <ProfileContainerClass { ...props } match = { match } />;
};

export default connect(mapStateToProps, { getUserProfile }) (ProfileContainer);