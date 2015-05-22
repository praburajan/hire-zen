/**
 * Created by prshanmu on 5/22/2015.
 */
'use strict';

hireZen.factory('ManageCandidatesStore', ['CandidatesStore', function (CandidatesStore) {
    var candidates = CandidatesStore.getCandidates();
    //todo: put dummy code to insert email and contact number for all candidates
    candidates.forEach(function(candidate, index, arr) {
        candidate.email = candidate.name+'@example.com';
        candidate.contactNumber = '9845621345';
    });
    var selection = {
        selectedCandidate : ""
    };

    return {
        getCandidates : function() {
            return candidates;
        },

        getSelectedCandidate : function() {
            return selection.candidate;
        },

        setSelectedCandidate : function(candidate) {
            selection.candidate = candidate;
        },

        getSelection : function() {
            return selection;
        }
    };
}]);