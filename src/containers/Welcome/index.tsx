import {connect} from "react-redux";
import {AppMainState} from "../../utitles/models";
import {completeTutorial} from "../../redux/actions";
import Welcome from "./welcome";


interface StateProps {

}

interface DispatchProps {
    completeTutorial: () => void;
}

const mapStateToProps = (state: AppMainState): StateProps => {
    return {};
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    completeTutorial: () => dispatch(completeTutorial)
});

export default connect<StateProps, DispatchProps, {}, AppMainState>(mapStateToProps, mapDispatchToProps)(Welcome);
