import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/dCandidate';

export const DCandidates = (props) => {

    useEffect(() => {
        console.log(props)
        props.fetchAllCandidates()
    }, [])

    return (
        <div>
            from Dcandidates
        </div>
    )
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionsToProps = {
    fetchAllCandidates: actions.fetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(DCandidates)