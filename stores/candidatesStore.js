'use strict';

hireZen.factory('CandidatesStore', function() {
	var candidates = [{
		name: "Naresh Kumar",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Dinesh Karthik",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Zaheer Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Shikhar Dawan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Virender Sehwag",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Andrea",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Sridevi",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Salman Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Aamir Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Ranbhir Kapoor",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Virath Kohli",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "MS Dhoni",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Trisha",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Michael Jackson",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}, {
		name: "Narendra Modi",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}];

	var teams = ["All", "Workspace", "Composer", "Foundation Services", "Human Workflow", "Cloud OPS"];
	var managers = ["All", "Prabu", "Magesh", "Mahesh Rao", "Sri Krishan", "Kapil", "Krishna"];
	var statuses = ["All", "In Progress", "Offer Approval", "Offered", "Rejected"];

	var selection = {
        team : "All",
        manager : "All",
        status : "All",
		candidate : candidates[0]
    };


	return {
		getCandidates: function() {
			return candidates;
		},
		getTeams: function() {
			return teams;
		},
		getManagers: function() {
			return managers;
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

        getSelectedManager : function() {
            return selection.manager;
        },

        getSelection : function() {
            return selection;
        },

        setSelectedTeam : function(team) {
            selection.team = team;
        },

        setSelectedManager : function(manager) {
            selection.manager = manager;
        }
	};
});