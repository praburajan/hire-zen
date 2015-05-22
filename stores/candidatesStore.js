'use strict';

hireZen.factory('CandidatesStore', function() {
	var candidates = [{
		name: "Naresh Kumar",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team : "Composer"
	}, {
		name: "Dinesh Karthik",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team : "Workspace"
	}, {
		name: "Zaheer Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team : "Foundation Services"
	}, {
		name: "Shikhar Dawan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Human Workflow"
	}, {
		name: "Virender Sehwag",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Cloud OPS"
	}, {
		name: "Andrea",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Workspace"
	}, {
		name: "Sridevi",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Foundation Services"
	}, {
		name: "Salman Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Composer"
	}, {
		name: "Aamir Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Human Workflow"
	}, {
		name: "Ranbhir Kapoor",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Workspace"
	}, {
		name: "Virath Kohli",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Composer"
	}, {
		name: "MS Dhoni",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Foundation Services"
	}, {
		name: "Trisha",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Cloud OPS"
	}, {
		name: "Michael Jackson",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Cloud OPS"
	}, {
		name: "Narendra Modi",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Human Workflow"
	}];



	var teams = ["All", "Workspace", "Composer", "Foundation Services", "Human Workflow", "Cloud OPS"];
	var statuses = ["All", "In Progress", "Offer Approval", "Offered", "Rejected"];

	var selection = {
        team : "",
        status : "",
		candidate : candidates[0]
    };


	return {
		getCandidates: function() {
			return candidates;
		},
		getTeams: function() {
			return teams;
		},
		getStatuses: function() {
			return statuses;
		},

		getSelectedCandidate : function () {
			return selection.candidate;
		},

        getSelectedTeam : function() {
            return selection.team;
        },

        getSelection : function() {
            return selection;
        },

		setSelectedCandidate : function (candidate) {
			selection.candidate = candidate == "All" ? "" : candidate;
		},

        setSelectedTeam : function(team) {
            selection.team = team == "All" ? "" : team;
        },

		getCandidate : function(id) {
			return candidates[id];
		}
	};
});